import { useEditor, useNode } from '@craftjs/core';
import { Component, ReactNode, useEffect, useState } from 'react';
import Select, { MultiValue, components, createFilter } from 'react-select';
import { suggestions } from '@/lib/tw-classes';
import { FixedSizeList as List } from 'react-window';
import { Button } from './ui/button';
import { Trash2 } from 'lucide-react';
import { Input } from './ui/input';
import { MdDone } from "react-icons/md";
import { FaCircleStop } from "react-icons/fa6";
import { Slider } from "@/components/ui/slider"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const selectOptions = suggestions.map((value) => ({ label: value, value }));

export const SettingsControl = () => {
  const { query, actions } = useEditor();
  const {
    id,
    classNames,
    deletable,
    text,
    data,
    actions: { setProp },
  } = useNode((node) => {
    return {
      classNames: node.data.props["className"] as string,
      text: node.data.props["children"] as string,
      deletable: query.node(node.id).isDeletable(),
      data: node.data,
    };
  });
  const [isAdvanceMenuOpen, setIsAdvanceMenuOpen] = useState(false)

  const tailwindcssArr = classNames
    ? classNames.split(' ').filter(Boolean)
    : [];

  const initialOptions = tailwindcssArr.map((value) => ({
    label: value,
    value,
  }));

  useEffect(() => {
    const tailwindcssArr = classNames
      ? classNames.split(' ').filter(Boolean)
      : [];

    const newOptions = tailwindcssArr.map((value) => ({
      label: value,
      value,
    }));

    setValue(newOptions);
  }, [classNames]);

  const [value, setValue] = useState<MultiValue<any>>(initialOptions);

  const height = 35;

  interface MenuListProps {
    options: any[];
    children: any[];
    maxHeight: number;
    getValue: () => any[];
  }

  class MenuList extends Component<MenuListProps> {
    render() {
      const { options, children, maxHeight, getValue } = this.props;
      const [value] = getValue();
      const initialOffset = options.indexOf(value) * height;

      return (
        <List
          width={'100%'} // Replace with the desired width value
          height={maxHeight}
          itemCount={children.length}
          itemSize={height}
          initialScrollOffset={initialOffset}
        >
          {({ index, style }: any) => <div style={style}>{children[index]}</div>}
        </List>
      );
    }
  }

  const CustomOption = ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    innerProps: any;
  }) => {
    // Remove the niceties for mouseover and mousemove to optimize for large lists
    // eslint-disable-next-line no-unused-vars
    const { onMouseMove, onMouseOver, ...rest } = props.innerProps;
    const newProps = { ...props, innerProps: rest };
    return (
      // @ts-ignore
      <components.Option {...newProps}>
        <div className="text-xs">{children}</div>
      </components.Option>
    );
  };

  return (
    <div className="flex h-[100dvh] flex-col gap-4 overflow-y-scroll p-4">
      <Button
        className="flex w-full items-center gap-4"
        variant="secondary"
        onClick={() => actions.clearEvents()}
      >
        <MdDone />
        done
      </Button>

      <h1 className="my-6 flex items-center gap-2 text-lg font-bold">
        <FaCircleStop />
        <p>{data?.displayName}</p>
      </h1>
      {typeof text === "string" ? (
        <div className="grid gap-2">
          <label>Label</label>
          <Input
            type="text"
            value={text}
            className=""
            onChange={(e) =>
              setProp(
                (props: { children: ReactNode }) =>
                (props.children = e.target.value.replace(
                  /<\/?[^>]+(>|$)/g,
                  "",
                )),
              )
            }
          />
        </div>
      ) : null}

      <ul className="my-6 grid gap-4">
        <SliderItem
          label="Padding"
          prefix="p"
          steps={5}
          values={["0", "4", "8", "12", "16", "20"]}
          regex={/p-[0-9]+/gm}
          setProp={setProp}
        />
        <SliderItem
          label="Margin"
          prefix="m"
          steps={5}
          values={["0", "4", "8", "12", "16", "20"]}
          regex={/m-[0-9]+/gm}
          setProp={setProp}
        />
      </ul>

      <Accordion type="single" collapsible>
        <AccordionItem value="advance">
          <AccordionTrigger className="text-lg font-bold">
            Advance
          </AccordionTrigger>
          <AccordionContent
            className={`${isAdvanceMenuOpen ? "h-64" : ""} flex flex-col gap-2`}
          >
            <label className="font-medium">Tailwind Styles</label>
            <Select
              options={selectOptions}
              openMenuOnClick={true}
              onMenuOpen={() => setIsAdvanceMenuOpen(true)}
              onMenuClose={() => setIsAdvanceMenuOpen(false)}
              className="text-darkTheme"
              classNames={{
                option: () => "text-darkTheme",
              }}
              isSearchable
              isClearable={false}
              // @ts-ignore
              components={{ MenuList, Option: CustomOption }}
              isMulti
              placeholder={"Add new class"}
              value={value}
              filterOption={createFilter({ ignoreAccents: false })}
              onChange={(option) => {
                if (option && Array.isArray(option)) {
                  const classNames = option.map((item) => item.value).join(" ");
                  setProp((props: { className: string }) => {
                    props.className = classNames;
                  });
                }

                if (!option) {
                  setProp(
                    (props: { className: string }) => (props.className = ""),
                  );
                }

                setValue(option);
              }}
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {deletable ? (
        <Button
          variant="ghost"
          className="mb-4 flex w-full cursor-pointer items-center justify-start p-2"
          onClick={(event) => {
            event.stopPropagation();
            if (parent) {
              actions.delete(id);
            }
          }}
        >
          <Trash2 className="mr-2 h-4 w-4" />
          Delete
        </Button>
      ) : null}
    </div>
  );
};

const SliderItem = ({ label, prefix, steps, values, setProp, regex }: { setProp: (cb: any, throttleRate?: number | undefined) => void, label: string, prefix: string, steps: number, values: string[], regex: RegExp }) => {
  return <li className='grid gap-2'>
    <p>{label}</p>
    <Slider
      onValueChange={(e) => {
        setProp((props: { className: string }) => {
          let newClassNames = ""

          if (!props?.className) {
            newClassNames = `${prefix}-${values[e[0]]}`;
          } else if (
            props?.className?.match(regex) &&
            props?.className?.match(regex)?.length !== 0
          ) {
            newClassNames = props.className.replace(
              regex,
              `${prefix}-${values[e[0]]}`,
            );
          } else {
            newClassNames = props.className + ` ${prefix}-${values[e[0]]}`;
          }

          props.className = newClassNames;
        });
      }}
      defaultValue={[0]}
      max={steps} step={1} />
  </li>
}
export const Viewport = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="viewport w-full overflow-y-auto overflow-x-hidden">
      <div className={"craftjs-renderer flex-1 h-full w-full"}>{children}</div>
    </div>
  );
};

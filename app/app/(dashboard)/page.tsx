import Header from "./header";
import Sidebar from "./sidebar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default async function Home() {
  return (
    <main className="flex h-[100dvh] w-full flex-col">
      <Header />
      <div className="flex h-full w-full">
        <Sidebar />
        <div className="w-full p-4">
          <div className=" h-40 w-full bg-blue-400"></div>
          {/* <Carousel>
            <CarouselContent className="w-full">
              <CarouselItem className="bg-blue-500"></CarouselItem>
              <CarouselItem>2</CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel> */}
        </div>
      </div>
    </main>
  );
}

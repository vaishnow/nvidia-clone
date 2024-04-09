import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import recommendedArticles from "@/data/carousel-recommended.json";
import { MdOutlineSettings } from "react-icons/md";

export default function RecommendedCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="container-s bg-nv-dark p-7"
    >
      <div className="flex h-16 mb-6">
        <h1 className="flex text-white font-semibold text-4xl my-auto">
          Recommended For You <MdOutlineSettings className="w-5 ms-4 pt-3" />
        </h1>
        <div className="ms-auto h-full hidden lg:block">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </div>
      <CarouselContent>
        {recommendedArticles.map((item) => (
          <CarouselItem key={item.title}>
            <div className="w-72 bg-white">
              <Image
                src={`/${item.src}`}
                alt="NVIDIA Logo"
                width={300}
                height={169}
                className="w-full h-auto"
              />
              <div className="p-4">
                <h2 className="text-nv-dark text-xs">{item.type}</h2>
                <h1 className="font-bold line-clamp-2">{item.title}</h1>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

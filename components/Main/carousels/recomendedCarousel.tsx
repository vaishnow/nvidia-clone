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
      className="my-5"
    >
      <div className="flex">
        <h1 className="flex">Recommended For You <MdOutlineSettings/></h1>
        <div className="ms-auto">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </div>
      <CarouselContent>
        {recommendedArticles.map((item) => (
          <CarouselItem key={item.title} className="md:basis-1/2 lg:basis-1/3">
            <div className="h-auto">
              <Image
                src={`/${item.src}`}
                alt="NVIDIA Logo"
                width={400}
                height={400}
                className="w-full h-auto"
              />
              <h2>{item.title}</h2>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

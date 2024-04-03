"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useState } from "react";

interface CarouselData {
  data: {
    title: string;
    desc: string;
    quicklinks: { url: string; name: string }[];
    carousel: {
      title: string;
      desc: string;
      type: string;
      href: string;
      src: string;
    }[];
  };
}

export default function RecommendedCarousel({
  data: { carousel, desc, quicklinks, title },
}: CarouselData) {
  const [qlIsVisible, setQlIsVisible] = useState<boolean>(false);
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="my-20"
    >
      <div className="flex">
        <div className="ms-auto">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </div>
      <CarouselContent>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div>
            <h2>{title}</h2>
            <p>{desc}</p>
            <div>
              <button onClick={()=>setQlIsVisible(prev=>!prev)}>Quick Links</button>
              {qlIsVisible &&
                quicklinks.map((item) => (
                  <a target="_blank" href={item.url} rel="noopener noreferrer">
                    {item.name}
                  </a>
                ))}
            </div>
          </div>
        </CarouselItem>
        {carousel.map((item) => (
          <CarouselItem key={item.title} className="md:basis-1/2 lg:basis-1/3">
            <div>
              <Image src={`/${item.src}`} alt="" width={500} height={500} className="w-full h-auto"/>
              <h2>{item.title}</h2>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

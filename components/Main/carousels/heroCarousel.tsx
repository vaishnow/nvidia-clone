"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import heroCarousel from "@/data/hero-carousel.json";

export default function HeroCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const plugin = useRef(Autoplay({ delay: 2000 }));

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel setApi={setApi} plugins={[plugin.current]} className="w-full">
      <CarouselContent className="min-h-96 max-h-dvh">
        {heroCarousel.map((item, index) => (
          <CarouselItem key={index} className="bg-slate-500">
            <div>
              <div>
                <div className="flex items-center justify-center p-6"><picture>
                  <source srcSet={item.picture.dataSrcsetMobile} media="(max-width: 639px)"  className="w-full h-auto"/>
                  <source srcSet={item.picture.dataSrcsetTablet} media="(min-width:640px) and (max-width:1023px)"  className="w-full h-auto"/>
                  <source srcSet={item.picture.dataSrcsetLaptop} media="(min-width:1024px) and (max-width:1349px)"  className="w-full h-auto"/>
                  <source srcSet={item.picture.dataSrcsetDesktop} media="(min-width:1350px)"  className="w-full h-auto"/>
                    <img src={`/${item.picture.fallback}`} width={3000} height={1800} alt={item.title} className="w-full h-auto"/>
                </picture>
                  <span className="text-4xl font-semibold">{item.title}</span>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute bottom-0 w-full">
        <div className="flex justify-around">
          {heroCarousel.map((item) => (
            <div className="w-36 line-clamp-3 text-sm" key={item.title}>
              {item.title}
            </div>
          ))}
        </div>
      </div>
    </Carousel>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import heroCarousel from "@/data/hero-carousel.json";
import styles from "./heroCarousel.module.css";

export default function HeroCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const plugin = useRef(Autoplay({ delay: 5000 }));

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      plugins={[plugin.current]}
      className="w-full text-white"
    >
      <CarouselContent className="min-h-96 max-h-dvh">
        {heroCarousel.map((item, index) => (
          <CarouselItem key={index} className="bg-black w-screen">
            <div>
              <div>
                <div className="flex items-center justify-center relative h-[95dvh] md:max-h-screen">
                  <picture className="h-full object-cover relative left-0">
                    <source
                      srcSet={item.picture.dataSrcsetMobile}
                      media="(max-width: 639px)"
                      className="h-full object-cover"
                    />
                    <source
                      srcSet={item.picture.dataSrcsetTablet}
                      media="(min-width:640px) and (max-width:1023px)"
                      className="h-full object-cover"
                    />
                    <source
                      srcSet={item.picture.dataSrcsetLaptop}
                      media="(min-width:1024px) and (max-width:1349px)"
                      className="h-full object-cover"
                    />
                    <source
                      srcSet={item.picture.dataSrcsetDesktop}
                      media="(min-width:1350px)"
                      className="h-full object-cover"
                    />
                    <img
                      src={`/${item.picture.fallback}`}
                      width={3000}
                      height={1800}
                      alt={item.title}
                      className="h-full object-cover"
                    />
                  </picture>
                  <div className="container flex justify-start h-full py-8 sm:items-center absolute inset-0 mx-auto">
                    <div className="max-w-[50%] whitespace-break-spaces">
                      <h3 className="text-lg font-semibold">{item.heading}</h3>
                      <h1 className="text-[3pc] leading-[4pc] font-semibold">
                        {item.title}
                      </h1>
                      <p className="mt-4 my-7">{item.paragraph}</p>
                      <a
                        href={item.button.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 font-bold bg-nv-green text-black"
                      >
                        {item.button.value}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute bottom-0 w-full container inset-x-0 mx-auto">
        <div className="flex justify-between gap-7 h-5 lg:h-24 mb-4">
          {heroCarousel.map((item, index) => {
            let isActive = index + 1 === current;
            return (
              <div
                className="w-full h-full line-clamp-3 text-sm flex-col"
                key={item.title}
              >
                <div className={styles.progressWrapper}>
                  <div
                    className={isActive ? styles.progressBar : "hidden"}
                  ></div>
                </div>
                <h4
                  className={`hidden lg:block text-xs font-semibold my-3 ${!isActive && `text-nv-gray`}`}
                >
                  {item.heading}
                </h4>
                <p className={`hidden lg:line-clamp-2 ${!isActive && `text-nv-gray`}`}>
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </Carousel>
  );
}

"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";

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
    <>
      <div className="sm:flex">
        <Carousel
          opts={{
            align: "start",
          }}
          className="my-20 float-none overflow-hidden"
        >
          <div className="sm:flex my-3">
            <h2 className="my-auto text-2xl font-bold">{title}</h2>
            <div className="ms-auto max-sm:hidden">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </div>
          <div className="w-full sm:hidden ps-3">
            <div className="leading-7 tracking-wide text-lg">
              <p className="text-lg xl:text-xl text-nv-dark leading-7 font-thin">
                {desc}
              </p>
              <div className="font-bold text-[15px]">
                <button
                  onClick={() => setQlIsVisible((prev) => !prev)}
                  className="block my-8"
                >
                  <FaAngleRight
                    className={`inline w-[10px] text-nv-green group-hover:text-nv-dark group-hover:translate-x-2 me-5  ${
                      qlIsVisible ? `-rotate-90` : `rotate-90`
                    }`}
                  />
                  Quick Links
                </button>
                <div className="flex gap-5 flex-wrap">
                  {qlIsVisible &&
                    quicklinks.map((item) => (
                      <a
                        target="_blank"
                        href={item.url}
                        rel="noopener noreferrer"
                        className="group"
                      >
                        {item.name}
                        <FaAngleRight className="inline w-[10px] ms-1 text-nv-green group-hover:text-nv-dark group-hover:translate-x-2 duration-1000" />
                      </a>
                    ))}
                </div>
              </div>
            </div>
          </div>
          <CarouselContent className="p-5">
            <div className="sm:min-w-[480px] max-sm:hidden">
              <div className="leading-7 tracking-wide text-lg">
                <p className="text-lg xl:text-xl text-nv-dark leading-7 font-thin">
                  {desc}
                </p>
                <div className="font-bold text-[15px]">
                  <button
                    onClick={() => setQlIsVisible((prev) => !prev)}
                    className="block my-8"
                  >
                    <FaAngleRight
                      className={`inline w-[10px] text-nv-green group-hover:text-nv-dark group-hover:translate-x-2 me-5  ${
                        qlIsVisible ? `-rotate-90` : `rotate-90`
                      }`}
                    />
                    Quick Links
                  </button>
                  <div className="flex gap-5 flex-wrap">
                    {qlIsVisible &&
                      quicklinks.map((item) => (
                        <a
                          target="_blank"
                          href={item.url}
                          rel="noopener noreferrer"
                          className="group"
                        >
                          {item.name}
                          <FaAngleRight className="inline w-[10px] ms-1 text-nv-green group-hover:text-nv-dark group-hover:translate-x-2 duration-1000" />
                        </a>
                      ))}
                  </div>
                </div>
              </div>
            </div>
            {carousel.map((item) => (
              <CarouselItem
                key={item.title}
                className="w-[420px] h-[490px] mx-5 shadow-lg pl-0"
              >
                <Image
                  src={`/${item.src}`}
                  alt={item.title}
                  width={420}
                  height={230}
                  className="w-full h-auto   object-cover"
                  loading="lazy"
                />
                <div className="p-5">
                  <h2 className="font-bold ">{item.type}</h2>
                  <h1 className="font-bold text-lg my-5">{item.title}</h1>
                  <p className="line-clamp-4">{item.title}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  );
}

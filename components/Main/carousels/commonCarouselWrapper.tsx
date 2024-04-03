import CommonCarousel from "./commonCarousel";
import carousel1 from "@/data/carousel-1.json";
import carousel2 from "@/data/carousel-2.json";
import carousel3 from "@/data/carousel-3.json";
import carousel4 from "@/data/carousel-4.json";
import carousel5 from "@/data/carousel-5.json";
import carousel6 from "@/data/carousel-6.json";
import carousel7 from "@/data/carousel-7.json";
import carousel8 from "@/data/carousel-8.json";

export default function commonCarouselWrapper() {
  return (
    <div>
      <CommonCarousel data={carousel1} />
      <CommonCarousel data={carousel2} />
      <CommonCarousel data={carousel3} />
      <CommonCarousel data={carousel4} />
      <CommonCarousel data={carousel5} />
      <CommonCarousel data={carousel6} />
      <CommonCarousel data={carousel7} />
      <CommonCarousel data={carousel8} />
    </div>
  );
}

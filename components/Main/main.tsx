import HeroCarousel from "./carousels/heroCarousel"
import RecommendedCarousel from "./carousels/recomendedCarousel"
import CommonCarouselWrapper from "./carousels/commonCarouselWrapper"
import GtcBanner from "./gtcBanner"

export default function Main() {
  return (
	<main>
    <HeroCarousel/>
    <RecommendedCarousel/>
    <GtcBanner/>
    <CommonCarouselWrapper/>
  </main>
  )
}
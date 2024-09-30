import Image from "next/image";

import { CarouselProvider, Slider, Slide } from "pure-react-carousel";

import useVisibleSlides from "@/utils/hooks/pure-react-carousel/useVisibleSlides";


const photos = [];


export default function Photos() {

  const { visibleSlidesCount } = useVisibleSlides();

  return (
    <CarouselProvider
      className="photos-carousel w-screen px-3"
      naturalSlideWidth={100}
      naturalSlideHeight={125}
      isIntrinsicHeight
      visibleSlides={visibleSlidesCount}
      totalSlides={photos.length}
      isPlaying
      interval={1000}
    >
      <Slider className="photos-slider select-none cursor-grab active:cursor-grabbing">
        {photos.map((category, index) => (
          <Slide
            key={category.id}
            index={index}
            className="mx-[2.5vw]"
            innerClassName="relative"
          >
            <div className="img-cont relative w-full h-[80vw] sm:h-[40vw] lg:h-[25vw]">
              <Image
                className="object-cover object-center rounded-3xl"
                fill
                src={category.image}
                alt={category.imageAlt}
              />
            </div>

            <div className="content absolute bottom-0 w-full flex justify-between uppercase p-5 overlay-black-50 after:rounded-b-3xl text-white">
              <div className="category flex flex-col gap-2 z-10">
                <div className="category-text text-sm font-semibold">
                  {category.categoryName}
                </div>
                <div className="total-products text-xs opacity-50">
                  {`${category.totalProducts} Products`}
                </div>
              </div>
              <button className="z-10 border px-3 py-1 rounded-xl">
                View All
              </button>
            </div>
          </Slide>
        ))}
      </Slider>
    </CarouselProvider>
  );
}

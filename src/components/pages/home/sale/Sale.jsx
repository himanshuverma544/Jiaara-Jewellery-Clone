'use client';

import { 
  CarouselProvider,
  Slider,
  Slide,
} from 'pure-react-carousel';

import SaleProductCard from "./components/SaleProductCard";

import useVisibleSlides from '@/utils/hooks/pure-react-carousel/useVisibleSlides';


const salePath = "/assets/pages/homepage/sections/6-Sale";

const saleProducts = [
  {
    id: 1,
    image: `${salePath}/1.webp`,
    name: "Twist Rows Bracelet",
    discountPercentage: "28% Off",
    discountedPrice: "6,200.00",
    actualPrice: "8,400.00",
    rating: 4.4
  },
  {
    id: 2,
    image: `${salePath}/2.webp`,
    name: "18ct Yellow Gold GG",
    discountPercentage: "5% Off",
    discountedPrice: "52,000.00",
    actualPrice: "55,500.00",
    rating: 4.4
  },
  {
    id: 3,
    image: `${salePath}/3.webp`,
    name: "18ct White Gold 2CTTW",
    discountPercentage: "18% Off",
    discountedPrice: "58,400.00",
    actualPrice: "75,800.00",
    rating: 4.4
  },
  {
    id: 4,
    image: `${salePath}/2.webp`,
    name: "18ct Yellow Gold GG",
    discountPercentage: "5% Off",
    discountedPrice: "52,000.00",
    actualPrice: "55,500.00",
    rating: 4.4
  },
  {
    id: 5,
    image: `${salePath}/1.webp`,
    name: "Twist Rows Bracelet",
    discountPercentage: "28% Off",
    discountedPrice: "6,200.00",
    actualPrice: "8,400.00",
    rating: 4.4
  },
  {
    id: 6,
    image: `${salePath}/1.webp`,
    name: "Twist Rows Bracelet",
    discountPercentage: "28% Off",
    discountedPrice: "6,200.00",
    actualPrice: "8,400.00",
    rating: 4.4
  },
  {
    id: 7,
    image: `${salePath}/2.webp`,
    name: "18ct Yellow Gold GG",
    discountPercentage: "5% Off",
    discountedPrice: "52,000.00",
    actualPrice: "55,500.00",
    rating: 4.4
  },
  {
    id: 8,
    image: `${salePath}/3.webp`,
    name: "18ct White Gold 2CTTW",
    discountPercentage: "18% Off",
    discountedPrice: "58,400.00",
    actualPrice: "75,800.00",
    rating: 4.4
  },
  {
    id: 9,
    image: `${salePath}/2.webp`,
    name: "18ct Yellow Gold GG",
    discountPercentage: "5% Off",
    discountedPrice: "52,000.00",
    actualPrice: "55,500.00",
    rating: 4.4
  },
  {
    id: 10,
    image: `${salePath}/1.webp`,
    name: "Twist Rows Bracelet",
    discountPercentage: "28% Off",
    discountedPrice: "6,200.00",
    actualPrice: "8,400.00",
    rating: 4.4
  },
  {
    id: 11,
    image: `${salePath}/1.webp`,
    name: "Twist Rows Bracelet",
    discountPercentage: "28% Off",
    discountedPrice: "6,200.00",
    actualPrice: "8,400.00",
    rating: 4.4
  },
  {
    id: 12,
    image: `${salePath}/2.webp`,
    name: "18ct Yellow Gold GG",
    discountPercentage: "5% Off",
    discountedPrice: "52,000.00",
    actualPrice: "55,500.00",
    rating: 4.4
  },
  {
    id: 13,
    image: `${salePath}/3.webp`,
    name: "18ct White Gold 2CTTW",
    discountPercentage: "18% Off",
    discountedPrice: "58,400.00",
    actualPrice: "75,800.00",
    rating: 4.4
  },
  {
    id: 14,
    image: `${salePath}/2.webp`,
    name: "18ct Yellow Gold GG",
    discountPercentage: "5% Off",
    discountedPrice: "52,000.00",
    actualPrice: "55,500.00",
    rating: 4.4
  },
  {
    id: 15,
    image: `${salePath}/1.webp`,
    name: "Twist Rows Bracelet",
    discountPercentage: "28% Off",
    discountedPrice: "6,200.00",
    actualPrice: "8,400.00",
    rating: 4.4
  },
  {
    id: 16,
    image: `${salePath}/1.webp`,
    name: "Twist Rows Bracelet",
    discountPercentage: "28% Off",
    discountedPrice: "6,200.00",
    actualPrice: "8,400.00",
    rating: 4.4
  },
  {
    id: 17,
    image: `${salePath}/2.webp`,
    name: "18ct Yellow Gold GG",
    discountPercentage: "5% Off",
    discountedPrice: "52,000.00",
    actualPrice: "55,500.00",
    rating: 4.4
  },
  {
    id: 18,
    image: `${salePath}/3.webp`,
    name: "18ct White Gold 2CTTW",
    discountPercentage: "18% Off",
    discountedPrice: "58,400.00",
    actualPrice: "75,800.00",
    rating: 4.4
  },
  {
    id: 19,
    image: `${salePath}/2.webp`,
    name: "18ct Yellow Gold GG",
    discountPercentage: "5% Off",
    discountedPrice: "52,000.00",
    actualPrice: "55,500.00",
    rating: 4.4
  },
  {
    id: 20,
    image: `${salePath}/1.webp`,
    name: "Twist Rows Bracelet",
    discountPercentage: "28% Off",
    discountedPrice: "6,200.00",
    actualPrice: "8,400.00",
    rating: 4.4
  },
];

const saleCategories = {
  bracelets: saleProducts,
  earrings: saleProducts,
  necklaces: saleProducts,
  rings: saleProducts
};


export default function Sale() {
  
  const { visibleSlidesCount } = useVisibleSlides({
    desktopVisibleSlidesCount: 3,
    tabletVisibleSlidesCount: 2,
    mobileVisibleSlidesCount: 1
  });

  return (
    <section id="sale" className="flex flex-col items-center justify-center gap-3">
      <h2 className="heading text-4xl uppercase text-primaryFont">
        Sale
      </h2>
      
      <div className="sale-categories w-full flex flex-wrap justify-center items-center px-5 py-2">
        {Object.keys(saleCategories).map((saleCategory, index) => 
          <button key={index} className="sale-category mx-5 my-4 uppercase">
            {saleCategory}
          </button>
        )}
      </div>
      
      <CarouselProvider
        className="carousel w-screen px-3"
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        isIntrinsicHeight
        visibleSlides={visibleSlidesCount}
        totalSlides={saleProducts.length}
        isPlaying
        interval={3000}
      >
        <Slider className="sales-products-slider select-none cursor-grab active:cursor-grabbing">
          {saleProducts.map((saleProduct, index) => 
            <Slide
              key={saleProduct.id}
              index={index}
              className="mx-[3vw]"
              innerClassName="flex flex-col gap-10"
            >
              <SaleProductCard saleProduct={saleProduct}/>
              <SaleProductCard saleProduct={saleProduct}/>
            </Slide>
          )}
        </Slider>
      </CarouselProvider>
    </section>
  );
}
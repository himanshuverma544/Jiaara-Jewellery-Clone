import ProductsCarousel from '@/components/global/ProductsCarousel';


const products = [
  {
    id: 1,
    image: "/assets/pages/homepage/products/only-product/1.webp",
    name: "Pearlime Jewellery",
    price: "9,200.00",
  },
  {
    id: 2,
    image: "/assets/pages/homepage/products/only-product/2.webp",
    name: "Tambina Jewellery",
    price: "6,300.00",
  },
  {
    id: 3,
    image: "/assets/pages/homepage/products/only-product/3.webp",
    name: "Sambina Jewellery",
    price: "7,500.00",
  },
  {
    id: 4,
    image: "/assets/pages/homepage/sections/3-FeaturedProducts/1.webp",
    name: "Amalita Earrings Pearl",
    price: "5,200.00",
  },
  {
    id: 5,
    image: "/assets/pages/homepage/sections/3-FeaturedProducts/2.webp",
    name: "Bambina Earrings White",
    price: "25,027.99",
  },
  {
    id: 6,
    image: "/assets/pages/homepage/sections/3-FeaturedProducts/3.webp",
    name: "Bambina Earrings Green",
    price: "25,027.99",
  },
  {
    id: 7,
    image: "/assets/pages/homepage/sections/3-FeaturedProducts/4.webp",
    name: "Amalita Earrings Green",
    price: "24,457.99",
  }
];


export default function BestSeller() {

  return (
    <ProductsCarousel
      className="best-seller"
      headingClassName="text-center text-2xl uppercase text-primaryFont"
      heading="Best Seller"
      carousel={{ 
        isPlaying: true,
        interval: 3000
      }}
      slideClassName="mx-[2.5vw]"
      slideInnerClassName="flex flex-col gap-3"
      data={{ products }}
    />
  );
}

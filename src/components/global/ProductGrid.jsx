import Product from "./Product";


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


export default function ProductGrid({ className = "" }) {

  return (
    <div className={`product-grid flex flex-wrap justify-center items-center gap-5 p-5 ${className}`}>
      {products.map(product => 
        <Product
          key={product.id}
          className="w-[35vw] max-w-[9rem]"
          product={product}
          imgContClassName="relative w-[inherit] h-[35vw] max-w-[9rem] max-h-[9rem]"
          imgClassName="rounded-3xl"
          productDetailsContClassName="text-xs text-primaryFont"
          productNameClassName="uppercase"
          btnTextClassName="rounded-s text-2xs uppercase bg-primaryFont text-white xs:text-xs"
          iconContClassName="text-lg p-2 rounded-e bg-white text-black"
        />
      )}
    </div>
  );
}
import Product from "./Product";

export default function ProductGrid({ className = "", products = [] }) {

  return (
    <div className={`product-grid flex flex-wrap justify-center items-center gap-x-[5vw] gap-y-10 p-[5vw] ${className}`}>
      {products.map(product =>
        <Product
          key={product.id}
          className="w-[35vw] max-w-[9rem]"
          product={product}
          imgContClassName="relative w-[inherit] h-[35vw] max-w-[9rem] max-h-[9rem]"
          productDetailsContClassName="text-xs text-primaryFont"
          productNameClassName="uppercase"
          btnTextClassName="text-2xs uppercase bg-primaryFont text-white xs:text-xs"
          iconContClassName="text-lg p-2 bg-white text-black"
        />
      )}
    </div>
  );
}
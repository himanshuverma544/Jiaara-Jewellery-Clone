import Product from "./Product";

export default function ProductGrid({ className = "", products = [] }) {

  return (
    <div
      className={`
        product-grid
        flex flex-wrap justify-between items-center gap-x-[5vw] gap-y-10 px-5 py-5
        xs:px-[5vw]
        sm:justify-start sm:px-[4vw]
        ${className}
      `}
    >
      {products.map(product =>
        <Product
          key={product?.id}
          className={`
            w-[87vw]
            2xs:w-[42vw] 
            sm:w-[27vw]
            md:w-[19vw]
            xl:w-[14vw]
            2xl:w-[11vw]
          `}
          imgContClassName={`
            w-full relative
            h-[87vw]
            2xs:h-[42vw]
            sm:h-[27vw]
            md:h-[19vw]
            xl:h-[14vw]
            2xl:h-[11vw]
          `}
          productDetailsContClassName="text-xs text-primaryFont"
          productNameClassName="uppercase"
          btnTextClassName="text-2xs uppercase bg-primaryFont text-white xs:text-xs"
          iconContClassName="text-lg p-2 bg-white text-black"
          product={product}
        />
      )}
    </div>
  );
}
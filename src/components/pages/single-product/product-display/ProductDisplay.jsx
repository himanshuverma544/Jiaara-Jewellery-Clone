'use client';

import ProductShowcase from "./components/ProductShowcase";
import ProductOverview from "./components/ProductOverview";
import ProductDetailsAccordionGroup from "./components/product-details-accordion-group/ProductDetailsAccordionGroup";


export default function ProductDisplay() {

  return (
    <section
      id="product-display"
      className="flex flex-col"
    >
      <div className="wrapper flex flex-col px-[3vw] py-10 md:flex-row lg:px-[5vw] xl:py-16">
        <ProductShowcase/>
        <ProductOverview/>
      </div>
      <ProductDetailsAccordionGroup/>
    </section>
  );
}

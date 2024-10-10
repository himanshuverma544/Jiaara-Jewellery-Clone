import { FiMinus, FiPlus } from "react-icons/fi";

import Accordion from "@/components/general/Accordion";
import Specification from "./components/Specification";
import ProductDescription from "./components/ProductDescription";


const accordionsData = [
  {
    title: "Specifications",
    content: <Specification/>
  },
  {
    title: "Product Description",
    content: <ProductDescription/>
  },
  {
    title: "Reviews",
    content: <p>{`I'm the Reviews Content.`}</p>
  }
];


export default function ProductDetailsAccordionGroup() {
  
  return (
    <div className="wrapper pb-5 bg-white">
      <div className="product-details-accordion-group px-[5vw]">
        {accordionsData.map((accordionData, index) =>
          <Accordion
            key={index}
            className="border-primaryFont"
            title={accordionData.title}
            titleClassName="text-sm sm:text-base xl:text-lg"
            contentClassName="content"
            content={accordionData.content}
            iconClassName="md:text-lg"
            openIcon={FiPlus}
            closeIcon={FiMinus}
          />
        )}
      </div>
    </div>
  );
}

import Content from "@/components/general/Icon";
import convertToBulletsPointsHTML from "@/utils/functions/general/convertToBulletsPointsHTML";


export default function ProductDescription({ className = "", product = null }) {

  return (
    <div className={`description ${className} px-[5vw] pb-5 md:px-[4vw]`}>
      <Content
        className="flex flex-col gap-5 bullet-all text-xs text-gray-800 xl:text-sm"
        icon={convertToBulletsPointsHTML(product?.description)}
        tag="ul"
      />
    </div>
  );
}

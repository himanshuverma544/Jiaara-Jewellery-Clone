import useWindowSize from "@/utils/hooks/general/useWindowSize";

import splitInHalf from "@/utils/functions/general/splitInHalf";


export default function Specification({ className = "", product = null }) {

  const { screenWidth, breakpoints: { md } } = useWindowSize();

  const [leftSpecs, rightSpecs] = splitInHalf(product?.specifications);


  const getBorderClassName = index => {

    if (index && (index !== 0 & index !== 1 || index === 1 && screenWidth < md)) {
      return "border-t border-gray-300";
    }
  }

  const normalizeWhitespace = text => {

    return text.replace(/[\W_]+/g, " ").trim();
  }


  return (
    <div className={`specification pb-3 overflow-x-auto text-xs xl:text-sm ${className}`}>
      <table className="min-w-full table-auto border-collapse">
        <tbody className="capitalize md:grid md:grid-cols-2 md:gap-x-10"> 

          {Object.entries(leftSpecs).map(([specificationName, specificationValue], index) => (
            <tr
              key={`left-${index}`}
              className={`${getBorderClassName(index)} md:flex md:justify-between`}
            >
              <td className="w-1/2 px-4 py-2 font-medium text-gray-600">
                {normalizeWhitespace(specificationName)}
              </td>
              <td className="w-1/2 px-4 py-2 text-gray-800">
                {normalizeWhitespace(specificationValue)}
              </td>
            </tr>
          ))}

          {Object.entries(rightSpecs).map(([specificationName, specificationValue], index) => (
            <tr
              key={`right-${index}`}
              className={`border-t border-gray-300 md:flex md:justify-between`}
            >
              <td className="w-1/2 px-4 py-2 text-gray-600 font-medium">
                {normalizeWhitespace(specificationName)}
              </td>
              <td className="w-1/2 px-4 py-2 text-gray-800">
                {normalizeWhitespace(specificationValue)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
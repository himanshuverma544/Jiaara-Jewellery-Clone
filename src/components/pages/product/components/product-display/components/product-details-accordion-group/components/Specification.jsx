import splitInHalf from "@/utils/functions/general/splitInHalf";


export default function Specification({ className = "", product = null }) {

  const [leftSpecs, rightSpecs] = splitInHalf(product?.specifications);

  return (
    <div className={`specification pb-3 overflow-x-auto text-xs xl:text-sm ${className}`}>
      <table className="min-w-full table-auto border-collapse">
        <tbody className="md:grid md:grid-cols-2 md:gap-x-10"> 

          {Object.entries(leftSpecs).map(([specificationName, specificationValue], index) => (
            <tr
              key={`left-${index}`}
              className="border-t border-gray-300 md:flex md:justify-between"
            >
              <td className="w-1/2 px-4 py-2 font-medium text-gray-600">
                {specificationName}
              </td>
              <td className="w-1/2 px-4 py-2 text-gray-800">
                {specificationValue}
              </td>
            </tr>
          ))}

          {Object.entries(rightSpecs).map(([specificationName, specificationValue], index) => (
            <tr
              key={`right-${index}`}
              className="border-t border-gray-300 md:flex md:justify-between"
            >
              <td className="w-1/2 px-4 py-2 text-gray-600 font-medium">
                {specificationName}
              </td>
              <td className="w-1/2 px-4 py-2 text-gray-800">
                {specificationValue}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

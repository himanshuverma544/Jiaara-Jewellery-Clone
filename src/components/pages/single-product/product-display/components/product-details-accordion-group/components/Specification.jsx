const specifications = {
  ['Package Dimensions']: "10.4 x 10.4 x 4.1 cm; 100g",
  ["Date First Available"]: "9 March 2024",
  ["Manufacturer"]: "Moira",
  ["ASIN"]: "B0CXM6BXG6",
  ["Item part number"]: "JRABST23-04",
  ["Country of Origin"]: "India",
  ["Department"]: "Women",
  ["Manufacturer Contact"]: "Moira, 9057585191",
  ["Packer"]: "Jiaara Creations Pvt Ltd",
  ["Item Weight"]: "100g",
  ["Net Quantity"]: "1.00 Piece"
};


const splitObject = obj => {

  const entries = Object.entries(obj);
  const mid = Math.ceil(entries.length / 2);

  return [entries.slice(0, mid), entries.slice(mid)];
};


export default function Specification({ className = "" }) {

  const [leftSpecs, rightSpecs] = splitObject(specifications);

  return (
    <div className={`specification pb-3 overflow-x-auto text-xs xl:text-sm ${className}`}>
      <table className="min-w-full table-auto border-collapse">
        <tbody className="md:grid md:grid-cols-2 md:gap-x-10"> 

          {leftSpecs.map(([specificationName, specificationValue], index) => (
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

          {rightSpecs.map(([specificationName, specificationValue], index) => (
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

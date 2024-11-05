import InputField from "@/components/general/InputField";
import OptionContainer from "@/components/global/filter/sidebar-filter/components/components/OptionContainer";


const collectionsOption = [
  {
    id: 1,
    label: "Brass",
    value: "brass",
    productsCount: 30
  },
  {
    id: 2,
    label: "Gold",
    value: "gold",
    productsCount: 34
  },
  {
    id: 3,
    label: "For Him",
    value: "for-him",
    productsCount: 54
  },
  {
    id: 4,
    label: "Minimalist",
    value: "minimalist",
    productsCount: 56
  },
  {
    id: 5,
    label: "Ethnic",
    value: "ethnic",
    productsCount: 57
  }
];


export default function CollectionsFilter({ className = "" }) {

  return (
    <div className={`collections-filter ${className}`}>
      <div className="heading uppercase font-semibold">
        Collections
      </div>

      <InputField
        className="mt-2"
        input={{
          className: "accent-black",
          type: "checkbox",
          options: collectionsOption.map(collectionOption => (
            {
              value: collectionOption.value,
              label: {
                className: "w-full ms-2 text-sm",
                text:
                  <OptionContainer
                    optionName={collectionOption.label}
                    productsCount={collectionOption.productsCount}
                  />
              }
            }
          ))
        }}
      />
    </div>
  );
}

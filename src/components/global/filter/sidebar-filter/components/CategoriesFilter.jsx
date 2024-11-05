import InputField from "@/components/general/InputField";
import OptionContainer from "@/components/global/filter/sidebar-filter/components/components/OptionContainer";


const categoriesOption = [
  {
    id: 1,
    label: "Brass",
    value: "brass",
    productsCount: 30
  },
  {
    id: 2,
    label: "Ethnic",
    value: "ethnic",
    productsCount: 34
  },
  {
    id: 3,
    label: "Oxidised",
    value: "oxidised",
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
    label: "Indo-Western",
    value: "indo-western",
    productsCount: 57
  }
];


export default function CategoriesFilter({ className = "" }) {

  return (
    <div className={`categories-filter ${className}`}>
      <div className="heading uppercase font-semibold">
        Categories
      </div>

      <InputField
        className="mt-2 "
        input={{
          className: "accent-black",
          type: "checkbox",
          options: categoriesOption.map(categoryOption => (
            {
              value: categoryOption.value,
              label: {
                className: "w-full ms-2 text-sm",
                text:
                  <OptionContainer
                    optionName={categoryOption.label}
                    productsCount={categoryOption.productsCount}
                  />
              }
            }
          ))
        }}
      />
    </div>
  );
}

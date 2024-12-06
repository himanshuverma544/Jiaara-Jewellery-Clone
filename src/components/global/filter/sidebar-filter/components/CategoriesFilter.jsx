import { useForm } from "react-hook-form";

import InputField from "@/components/general/InputField";
import OptionContainer from "@/components/global/filter/sidebar-filter/components/components/OptionContainer";

import skipMap from "@/utils/functions/general/skipMap";


export default function CategoriesFilter({ className = "", categories = [] }) {

  const { control } = useForm({ mode: "onChange" });
  
  return (
    <div className={`categories-filter ${className}`}>
      <form className="categories-form">
        <InputField
          className="mt-2"
          input={{
            id: "category-checkbox",
            inputName: "categoryCheckbox",
            className: "accent-black",
            type: "checkbox",
            options: skipMap(categories, [{ name: "General" }], category => (
              {
                value: category?.id,
                label: {
                  className: "w-full ms-2 text-sm",
                  text: (
                    <OptionContainer
                      optionName={category?.name}
                      productsCount={category?.count}
                    />
                  )
                }
              }
            ))
          }}
          control={control}
        />
      </form>
    </div>
  );
}

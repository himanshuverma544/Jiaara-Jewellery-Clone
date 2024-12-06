import InputField from "@/components/general/InputField";
import OptionContainer from "@/components/global/filter/sidebar-filter/components/components/OptionContainer";
import { useForm } from "react-hook-form";


export default function CollectionsFilter({ className = "", collections = [] }) {

  const { control } = useForm({ mode: "onChange" });


  return (
    <div className={`collections-filter ${className}`}>
      <form className="collections-form">
        <InputField
          className="mt-2"
          input={{
            id: "collection-checkbox",
            inputName: "collectionCheckbox",
            className: "accent-black",
            type: "checkbox",
            options: collections.map(collection => (
              {
                value: collection?.id,
                label: {
                  className: "w-full ms-2 text-sm",
                  text: (
                    <OptionContainer
                      optionName={collection?.name}
                      productsCount={collection?.count}
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

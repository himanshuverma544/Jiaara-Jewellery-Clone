'use client';

import { useEffect, useContext } from "react";
import { context } from "@/context-API/context";
import { storeData } from "@/context-API/actions/action.creators";

import { useForm, FormProvider } from 'react-hook-form';

import { CiFilter } from "react-icons/ci";

import AutoSelect from "@/components/general/AutoSelect";


export default function FilterBar({ className = "" }) {

  const {
    data: { triggered } = {},
    data: { states, objects } = {},
    dispatch
  } = useContext(context) || {};

  const [isOpen, setIsOpen]
    = triggered && Array.isArray(states?.sidebar) ? states?.sidebar : [false, () => {}];

  const toggleSidebar = () =>
    setIsOpen(!isOpen);


  const methods = useForm({ mode: "onChange" });

  const currSortMethod = methods?.watch("sortMethod");

  useEffect(() => {

    function storeComponentData() {

      const previousFilter = objects?.filter || {};

      const newFilter = {
        ...previousFilter,
        currSortMethod
      };

      if (JSON.stringify(previousFilter) !== JSON.stringify(newFilter)) {
        dispatch(storeData({ filter: newFilter }, "objects"));
      }
    }

    storeComponentData();
  }, [currSortMethod, objects?.filter, dispatch]);
  

  return (
    <div className={`filter-bar flex flex-col ${className}`}>

      <button
        className="filter-bar group flex items-center gap-1 px-[5vw] py-3 text-primaryFont"
        onClick={toggleSidebar}
      >
        <CiFilter className="filter-icon text-lg group-hover:stroke-1"/>
        <span className="text-sm uppercase group-hover:font-semibold">
          Filter
        </span>
      </button>

      <hr className="divider border-quaternaryBackground"/>

      <FormProvider { ...methods}>
        <form className="wrapper w-full flex justify-center items-center px-[5vw] mt-5">
          <AutoSelect
            className="w-full"
            input={{
              id: "sort-method-select",
              inputName: "sortMethod",
              className: "w-[inherit] border rounded-md px-3 py-2 text-sm border-quaternaryBackground input-selection-primaryFont hover:ring-secondaryBackground focus:ring-primaryFont cursor-default",
              placeholder: "Select Sort",
              autoComplete: "off",
              required: true,
              readOnly: true
            }}
            dropdownClassName="border rounded overflow-y-auto text-sm border-quaternaryBackground bg-white"
            optionClassName={{
              hover: "hover:bg-quinaryBackground",
              selection: "bg-primaryFont text-white hover:bg-primaryFont hover:text-white"
            }}
            defaultOption="Default"
            options={["Default", "Best Seller", "Latest", "Trending", "Rating"]}
          />

          <hr className="vertical-divider w-[5rem] rotate-90 border-quaternaryBackground"/>

          <AutoSelect
            className="w-full"
            input={{
              id: "order-select",
              inputName: "orderMethod",
              className: "w-[inherit] border rounded-md px-3 py-2 text-sm border-quaternaryBackground input-selection-primaryFont hover:ring-secondaryBackground focus:ring-primaryFont cursor-default",
              placeholder: "Sort Order",
              autoComplete: "off",
              required: true,
              readOnly: true
            }}
            dropdownClassName="border rounded overflow-y-auto text-sm border-quaternaryBackground bg-white"
            optionClassName={{
              hover: "hover:bg-quinaryBackground",
              selection: "bg-primaryFont text-white hover:bg-primaryFont hover:text-white"
            }}
            options={["Ascending", "Descending"]}
          />
        </form>
      </FormProvider>
    </div>
  );
}

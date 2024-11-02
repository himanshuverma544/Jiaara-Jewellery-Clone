'use client';

import Divider from "../general/Divider";

import { CiFilter } from "react-icons/ci";

import AutoSelect from "../general/AutoSelect";

const sortOptions = [
  "Name",
  "Best Seller",
  "Latest",
  "Trending",
  "Rating"
];

export default function FilterBar({ className = "" }) {

  return (
    <div className={`filter-bar flex flex-col ${className}`}>

      <button className="filter-bar flex items-center gap-1 px-[5vw] py-3 text-primaryFont">
        <CiFilter className="filter-icon text-lg"/>
        <span className="text-sm uppercase">
          Filter
        </span>
      </button>

      <hr className="divider border-quaternaryBackground"/>

      <div className="wrapper w-full flex justify-center items-center px-[5vw] mt-5">
        <AutoSelect
          className="w-full"
          input={{
            id: "sort-select",
            className: "w-[inherit] border rounded-md px-3 py-2 text-sm border-quaternaryBackground input-selection-primaryFont hover:ring-secondaryBackground focus:ring-primaryFont",
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
          options={sortOptions}
        />

        <hr className="vertical-divider w-[5rem] rotate-90 border-quaternaryBackground"/>

        <AutoSelect
          className="w-full"
          input={{
            id: "sort-select",
            className: "w-[inherit] border rounded-md px-3 py-2 text-sm border-quaternaryBackground input-selection-primaryFont hover:ring-secondaryBackground focus:ring-primaryFont",
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
      </div>
    </div>
  );
}

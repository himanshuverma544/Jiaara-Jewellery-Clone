'use client';

import { useEffect, useState } from "react";

import { useForm, FormProvider } from 'react-hook-form';

import { useQuery } from "@tanstack/react-query";

import { CiSearch } from "react-icons/ci";

import Modal from "@/components/general/Modal";
import Searchbar from "@/components/general/AutoSelect";


export default function ManageSearch({ isSearchActive = false, setIsSearchActive = () => {} }) {

  const methods = useForm({ mode: "onChange" });

  const [searchQuery, setSearchValue] = useState("");

  const getSearchValue = searchQuery => {

    if (searchQuery) {
      setSearchValue(searchQuery);
    }
  }

  // const { data: products } = useQuery({
  //   queryKey: ["search", searchQuery],
  //   queryFn: () =>
  //     getProducts({
  //       page: 1,
  //       perPage: 100,
  //       categoryId,
  //       onSale: true,
  //       status: "publish"
  //     }),
  //   enabled: false
  //     });

  useEffect(() => {
    console.log(searchQuery);
  }, [searchQuery]);




  return (
    <Modal isOpen={true} setIsOpen={setIsSearchActive}>
      <FormProvider {...methods}>
        <form className="search-container size-[20rem]">
          <Searchbar
            className="w-full"
            input={{
              id: "search-bar",
              inputName: "search-input",
              className: "w-[inherit] border rounded-md ps-3 py-3 pe-3 text-sm border-quaternaryBackground input-selection-primaryFont hover:ring-secondaryBackground focus:ring-primaryFont",
              placeholder: "Search Products",
              autoComplete: "off",
              required: true,
              icon: {
                theIcon: <CiSearch/>
              },
              value: getSearchValue,
              defaultValue: ""
            }}
            options={[]}
            dropdownClassName="max-h-[16rem] border rounded overflow-y-auto text-sm border-quaternaryBackground bg-white"
            optionClassName={{
              hover: "hover:bg-quinaryBackground",
              selection: "bg-primaryFont text-white hover:text-white"
            }}
          />
        </form>
      </FormProvider>
    </Modal>
  );
}
import { useState } from "react";

import { useQuery } from "@tanstack/react-query";

import AutoSelect from "@/components/general/AutoSelect";
import Modal from "@/components/general/Modal";


export default function ManageSearch({ isSearchActive = false, setIsSearchActive = () => {} }) {

  return (
    <Modal isOpen={true} setIsOpen={setIsSearchActive}>
      <form className="search-container size-[20rem]">
        <AutoSelect/>

        Hello World
      </form>
    </Modal>
  );
}
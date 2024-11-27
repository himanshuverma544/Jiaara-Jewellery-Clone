'use client';

import LayoutSidebar from "@/components/pages/layout/manage-layout-sidebar/components/LayoutSidebar";

import useWindowSize from "@/utils/hooks/general/useWindowSize";


export default function ManageLayoutSidebar() {

  const { screenWidth, breakpoints: { lg } } = useWindowSize();

  return (
    (screenWidth < lg &&
      <LayoutSidebar/>
    )
  );
}

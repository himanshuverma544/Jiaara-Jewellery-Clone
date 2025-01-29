'use client';

import { useQuery } from "@tanstack/react-query";

import BeautifulLayout from "@/components/global/beautiful-layout/BeautifulLayout";
import Validation from "@/components/general/Validation";

import { getCategories } from "@/utils/functions/api/cms/woocommerce/categories";

import { CATEGORIES } from "@/routes";


export default function Categories({ className = "" }) {
  
  const { data: parentCategories, isLoading, isSuccess } = useQuery({
    queryKey: ['parent-categories'],
    queryFn: () => getCategories({ parent: 0 }),
    retry: 10,
    retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000)
  });

  const requiredCategories = isSuccess ?
    parentCategories?.filter(category => category?.name !== "General") : [];

  const parentCategoriesUrl = isSuccess ?
    parentCategories.map(category => CATEGORIES?.getPathname(category?.id)) : [];


  return (
    <section
      id="shop-by-categories"
      className={`grid items-center gap-y-12 ${className}`}
    >

      <h2 className="heading text-center text-4xl uppercase text-primaryFont">
        {`Shop by ${CATEGORIES?.title}`}
      </h2>

      {isLoading ?
        <Validation
          className="w-full h-[10rem] text-primaryFont"
          message="Loading Categories…"
        />
      :
        <BeautifulLayout
          className="categories"
          items = {{
            itemsArr: requiredCategories || [],
            urlsArr: parentCategoriesUrl || []
          }}
        />
      }
    </section>
  );
}
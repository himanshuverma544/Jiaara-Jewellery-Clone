'use client';

import { useQuery } from "@tanstack/react-query";

import BeautifulLayout from "@/components/global/beautiful-layout/BeautifulLayout";
import Validation from "@/components/general/Validation";

import { getCollections } from "@/utils/functions/api/cms/woocommerce/collections";

import { COLLECTIONS } from "@/routes";


export default function Collections({ className = "" }) {

  const { data: collections, isLoading, isSuccess } = useQuery({
    queryKey: ["general-collections"],
    queryFn: getCollections,
    retry: 10,
    retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000)
  });

  const collectionsUrl = isSuccess ?
    collections.map(collection => COLLECTIONS.getPathname(collection?.id)) : [];

  return (
    <section
      id="shop-by-collections"
      className={`grid items-center gap-y-12 ${className}`}
    >
      <h2 className={`heading text-center px-5 text-4xl uppercase text-primaryFont`}>
        {`Shop by ${COLLECTIONS?.title}`}
      </h2>

      {isLoading ?
        <Validation
          className="w-full h-[10rem] text-primaryFont"
          message="Loading Collections…"
        />
      :
        <BeautifulLayout
          className="collections"
          items = {{
            itemsArr: collections || [],
            urlsArr: collectionsUrl || []
          }}
        />
      }
    </section>
  );
}

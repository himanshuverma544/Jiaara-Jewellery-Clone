import ManageShop from "@/components/pages/shop/ManageShop";


export default function Category({ params }) {

  return (
    <ManageShop className="category-page" params={params}/>
  );
}
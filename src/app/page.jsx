import Hero from "@/components/pages/home/Hero";
import Categories from "@/components/pages/home/Categories";
import FeaturedProducts from "@/components/pages/home/featured-products/FeaturedProducts";
import CelebrityStyle from "@/components/pages/home/CelebrityStyle";
import Collections from "@/components/pages/home/Collections";
import KeyBenefits from "@/components/pages/home/key-benefits/KeyBenefits";
import BuildingWithPurpose from "@/components/pages/home/BuildingWithPurpose";
import Testimonials from "@/components/pages/home/Testimonials";
import Sale from "@/components/pages/home/sale/Sale";


export default function Home() {

  return (
    <div className="homepage flex flex-col gap-12">
      <Hero/>
      <Categories/>
      <FeaturedProducts/>
      <CelebrityStyle/>
      <Collections/>
      <KeyBenefits/>
      <BuildingWithPurpose/>
      <Sale/>
    </div>
  );
}
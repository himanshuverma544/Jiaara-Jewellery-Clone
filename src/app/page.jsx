import Hero from "@/components/pages/home/Hero";
import Categories from "@/components/pages/home/Categories";
import FeaturedProducts from "@/components/pages/home/featured-products/FeaturedProducts";
import CelebrityStyle from "@/components/pages/home/CelebrityStyle";
import Collections from "@/components/pages/home/Collections";
import KeyBenefits from "@/components/global/key-benefits/KeyBenefits";
import BuildingWithPurpose from "@/components/pages/home/BuildingWithPurpose";
import Testimonials from "@/components/pages/home/testimonials/Testimonials";
import Sale from "@/components/pages/home/sale/Sale";
import FollowOnInstagram from "@/components/pages/home/follow-on-instagram/FollowOnInstagram";
import FeaturedDeals from "@/components/pages/home/featured-deals/FeaturedDeals";


export default function Home() {

  return (
    <div className="homepage flex flex-col gap-12">
      <Hero/>
      <Categories/>
      <Collections/>
      <FeaturedProducts/>
      <Sale/>
      <FeaturedDeals/>
      <CelebrityStyle/>
      <KeyBenefits/>
      <Testimonials/>
      <BuildingWithPurpose/>
      {/* <FollowOnInstagram/> */}
    </div>
  );
}
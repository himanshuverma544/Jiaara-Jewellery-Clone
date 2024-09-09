import Hero from "@/components/pages/home/Hero";
import Categories from "@/components/pages/home/Categories";
import FeaturedProducts from "@/components/pages/home/featured-products/FeaturedProducts";


export default function Home() {

  return (
    <div className="homepage flex flex-col gap-12">
      <Hero/>
      <Categories/>
      <FeaturedProducts/>
    </div>
  );
}
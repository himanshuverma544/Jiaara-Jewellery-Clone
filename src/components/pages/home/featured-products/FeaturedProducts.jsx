import BestSeller from "./components/BestSeller";
import Latest from "./components/Latest";
import Trending from "./components/Trending";


export default function FeaturedProducts() {

  return (
    <section id="featured-products" className="flex flex-col items-center justify-center gap-12">
      <h2 className="heading text-center text-4xl uppercase text-primaryFont">
        Featured Products
      </h2>

      <div className="products flex flex-col gap-10">
        <BestSeller/>
        <Latest/>
        <Trending/>
      </div>

    </section>
  );
}

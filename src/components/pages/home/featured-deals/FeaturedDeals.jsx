import Image from "next/image";

const secAssetsDir = "/assets/pages/homepage/deal";

export default function FeaturedDeals() {

  return (
    <section
      id="featured-deals"
      className="flex flex-col items-center justify-center gap-12"
    >
      <h2 className="heading text-center px-5 text-4xl uppercase text-primaryFont">
        Featured Deals
      </h2>

      <div className="featured-deals-cont w-full flex flex-col p-5 bg-white md:flex-row">

        <div className="img-cont relative w-[inherit] h-[20rem] md:w-[45%] md:h-auto">
          <Image
            className="object-cover object-center rounded-lg"
            fill
            src={`${secAssetsDir}/1.png`}
            alt="Featured Deals Image"
          />
        </div>

        <div className="deal-content text-center flex flex-col items-center justify-center gap-5 p-2 bg-white 2xs:p-4 xs:p-6 sm:gap-7 sm:p-15 md:w-[55%]">
          <h3 className="heading text-sm uppercase">
            Deal of the Week
          </h3>
          <h4 className="deal-heading text-2xl uppercase">
            Elin Stacking Crystal Earrings
          </h4>

          <p className="deal-text text-xs">
            Designed to be worn solo or stacked for a bolder look. Each earring features dazzling crystals that catch the light beautifully, adding a touch of sophistication to any outfit.
          </p>

          <div className="time-left text-xl">
            06d : 14h : 11m : 49s
          </div>
           
            <div className="wrapper w-full flex justify-evenly items-center">

              <div className="coupon-wrapper w-[150px] h-[77px] relative 2xs:w-[160px] 2xs:h-[82px]">

                <div className="img-cont w-[inherit] h-[inherit] absolute inset-0">
                  <Image
                    fill
                    src={`${secAssetsDir}/coupon-layout.png`}
                    alt="coupon-layout"
                  />
                </div>

                <div className="coupon relative flex justify-evenly items-center mt-4 me-7 2xs:me-8 2xs:mt-5">
                  <div className="brand-name me-7 -rotate-90 text-3xs uppercase font-semibold 2xs:me-7">
                    Jiaara
                  </div>
                  <div className="wrapper text-start">
                    <div className="coupon-text text-2xs font-semibold">
                      Buy 1 Get 1
                    </div>
                    <div className="coupon-code-text mt-0.5 text-3xs">
                      Use Code
                    </div>
                    <div className="coupon-code text-2xs font-semibold">
                      ELIN2024
                    </div>
                  </div>
                </div>
              </div>

              <button className="shop-now-btn px-2 py-1 rounded text-sm bg-black text-white 2xs:px-4 sm:text-base">
                Shop Now
              </button>
            </div>

            <p className="deal-disclaimer text-center mt-2 text-xs">
              Limited time offer.
              The deal will expire on December 31, 2024.
              Hurry Up!
            </p>
        </div>
      </div>
    </section>
  );
}

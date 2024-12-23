import Image from "next/image";

import ContentOnBackground from "@/components/general/ContentOnBackground";


const dirAssets = "/assets/pages/homepage/purpose";


export default function BuildingWithPurpose() {

  return (
    <section id="building-with-purpose" className="flex flex-col items-center justify-center gap-12">
      
      <h2 className="heading text-center px-5 text-4xl uppercase text-primaryFont">
        Building with Purpose
      </h2>

      <div className="content-cont w-full flex flex-col md:flex-row">
        <ContentOnBackground
          className="text-content relative md:w-[60%]"
          image={{
            src: `${dirAssets}/bg-wallpaper.png`,
            alt: "Hands-Craft Background Image"
          }}
          innerClassName="wrapper w-full text-center flex flex-col items-center justify-center gap-5 p-10 text-primaryFont sm:gap-7 sm:p-15"
        >
          <h3 className="heading text-2xl italic">
            The Hands Behind the Craft
          </h3>
          <p className="text text-sm">
            At the heart of our jewellery lies the skill and dedication of our artisans, the true artists behind each piece.
            <br/><br/>
            With years of experience and a deep respect for traditional techniques, they meticulously craft every detail by hand, infusing their passion and expertise into every creation.
            <br/><br/>
            Our artisans are more than just makers; they are custodians of age-old craftsmanship, preserving the heritage of jewelry-making while bringing their unique touch to each design.
            <br/><br/>
            Their unwavering commitment to excellence ensures that every piece of jewelry is not only a beautiful adornment but a timeless work of art, rich with history and meaning.
          </p>
        </ContentOnBackground>

        <div className="img-cont relative w-[inherit] h-[20rem] md:w-[40%] md:h-auto">
          <Image
            className="object-cover object-center"
            fill
            src={`${dirAssets}/preview-image.jpg`}
            alt="Hands-Craft Preview Image"
          />
        </div>
      </div>
    </section>
  );
}

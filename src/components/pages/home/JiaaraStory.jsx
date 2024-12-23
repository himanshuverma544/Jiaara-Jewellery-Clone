import Image from "next/image";

import ContentOnBackground from "@/components/general/ContentOnBackground";


const dirAssets = "/assets/pages/homepage";


export default function JiaaraStory() {

  return (
    <section
      id="building-with-purpose"
      className="flex flex-col items-center justify-center gap-12"
    >
      <h2 className="heading text-center px-5 text-4xl uppercase text-primaryFont">
        Jiaara Story
      </h2>

      <div className="content-cont w-full flex flex-col md:flex-row">
        <div className="img-cont relative w-[inherit] h-[20rem] md:w-[40%] md:h-auto">
          <Image
            className="object-contain bg-white"
            fill
            src={`${dirAssets}/jiaara-story/jiaara-logo.png`}
            alt="Jiaara Logo"
          />
        </div>

        <ContentOnBackground
          className="text-content relative md:w-[60%]"
          image={{
            src: `${dirAssets}/purpose/bg-wallpaper.png`,
            alt: "Jiaara Story Background Image"
          }}
          innerClassName="wrapper w-full text-center flex flex-col items-center justify-center gap-5 p-10 text-primaryFont sm:gap-7 sm:p-15"
        >
          <p className="text text-sm">
            Jiaara infuses traditional essence into the modern aesthetic. The brand draws inspiration from age-old sensibilities where Jewellery can be a powerful way to communicate personal values and beliefs. 
            <br></br><br></br>
            Jiaara offers bold and statement-making designs to express a sense of confidence & individuality whereas, understated and classic designs to express a more reserved or timeless sense of style. 
            <br></br><br></br>
            It envisions to empower the artisans & embrace creativity. Embrace the charm of Jiaara and elevate your fashion game with its undeniable allure.
          </p>
        </ContentOnBackground>
      </div>
    </section>
  );
}
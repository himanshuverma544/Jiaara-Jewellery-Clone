import Image from "next/image";

const celebrities = [
  {
    id: 1,
    image: "/assets/pages/homepage/sections/8-CelebrityStyle/1.jpg"
  },
  {
    id: 2,
    image: "/assets/pages/homepage/sections/8-CelebrityStyle/2.jpg"
  },
  {
    id: 3,
    image: "/assets/pages/homepage/sections/8-CelebrityStyle/3.jpg"
  },
  {
    id: 4,
    image: "/assets/pages/homepage/sections/8-CelebrityStyle/4.jpg"
  },
  {
    id: 5,
    image: "/assets/pages/homepage/sections/8-CelebrityStyle/5.jpg"
  },
  {
    id: 6,
    image: "/assets/pages/homepage/sections/8-CelebrityStyle/6.jpg"
  },
  {
    id: 7,
    image: "/assets/pages/homepage/sections/8-CelebrityStyle/7.jpg"
  },
  {
    id: 8,
    image: "/assets/pages/homepage/sections/8-CelebrityStyle/8.jpg"
  }
];

export default function CelebrityStyle() {

  return (
    <section id="celebrity-style" className="flex flex-col items-center justify-center gap-12">
      <h2 className="heading text-center px-5 text-4xl uppercase text-primaryFont">
        Celebrity Style
      </h2>

      <div className="celebrities flex flex-wrap justify-center items-center px-5">
        {celebrities.map(celebrity => 
          <div
            key={celebrity.id}
            className={`
              img-cont
              relative
              w-[43vw] h-[53vw]
              border-2 border-white
              sm:w-[32vw] sm:h-[42vw]
              lg:w-[25vw] lg:h-[35vw]
              xl:w-[21vw] xl:h-[31vw]
            `}>
            <Image
              className="object-cover object-center"
              fill
              src={celebrity.image}
              alt={celebrity.id}
            />
         </div>
        )}
      </div>
    </section>
  );
}

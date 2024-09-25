'use client';

import Photos from "./components/Photos";
import Reels from "./components/Reels";


// TODO: Fetch Photos and Reels from Instagram and build the Carousel and use into it

export default function FollowOnInstagram() {
  
  return (
    <section
      id="follow-on-instagram"
      className="flex flex-col items-center justify-center gap-12"
    >
      <h2 className="heading text-4xl uppercase text-primaryFont">
        Follow Us On Instagram
      </h2>

      <div className="carousels-cont flex flex-col items-center justify-center gap-5">
        <Photos/>
        <Reels/>
      </div>
    </section>
  );
}

import React from "react";
import memepic from "../assets/images/bg/bbg4.png";

const MemeCommunitySection = () => (
  <section
    id="community"
    className="py-16 bg-[#eee] meme-community lg:px-24 xl:px-72"
  >
    <div className="container grid gap-8 px-4 py-10 mx-auto md:grid-cols-2 rounded-xl">
      <div className="flex flex-col gap-5">
        <div class="about_left_text text-[#ff0000]">
          Join the $BOBIWINE meme community!
        </div>
        <p className="p-6 text-lg leading-relaxed text-white bg-black rounded-xl">
          <span className="font-bold text-yellow-500">Mission</span> <br />
          Be part of a movement that celebrates courage, hope, and the power of
          community. The BOBI Meme embodies resilience and unity, inspired by
          the strength to rise above adversity and fight for a future where
          freedom and opportunity thrive. Together, we stand for ideals that
          lift us all. Rise with BOBI! ✊
        </p>
      </div>
      <div className="text-center md:text-left">
        {/* <h2 className="sticky mb-4 text-3xl font-extrabold uppercase top-20">
          About Bobi Wine <br />{" "}
          <span className="text-black lowercase">
            From the Ghetto to a Global Icon of Hope and Freedom
          </span>
        </h2> */}
        <img src={memepic} alt="Bobi Wine" className="rounded-lg" />
      </div>
    </div>
  </section>
);

export default MemeCommunitySection;

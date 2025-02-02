import { React } from "react";
import aboutpic from "../assets/images/bg/bbg1.png";

const AboutSection = () => (
  <section
    id="about"
    className="py-16 text-white bg-[#ff0000] lg:px-24 xl:px-72 about"
  >
    <div className="container grid gap-8 px-4 py-10 mx-auto md:grid-cols-2 bg-black/30 rounded-xl">
      <div className="text-center md:text-left">
        <h2 className="sticky mb-4 text-3xl font-extrabold uppercase top-20">
          About KENZO <br />{" "}
          <span className="text-black lowercase">
            From the streets of Kampala to a Global Icon of Hope and Success
          </span>
        </h2>
        <img src={aboutpic} alt="KENZO" className="rounded-lg shadow-lg" />
      </div>
      <div className="flex flex-col gap-5">
        <div class="about_left_text">
          Start trading $KENZO freely on the Blockchain.
        </div>
        <p className="text-lg leading-relaxed">
          From the streets of Kampala to international stages, Eddy Kenzo's
          story is a beacon of resilience and hope. Born into adversity, he rose
          through music and became a symbol of the potential within all young
          people, especially those facing the harsh realities of street life.{" "}
          <br />
          <br />
          His journey, marked by persistence and courage, inspires not just
          music but a call to action for all who believe in the power of dreams.
          Kenzo’s life teaches us that any challenge can be overcome with hope
          and hard work. <br />
          <br />
          Today, as a celebrated artist, Kenzo continues to advocate for the
          youth, giving voice to the voiceless and inspiring a new generation to
          rise above their circumstances. <br />
          <br />
          Celebrate the ideals Eddy Kenzo stands for—hope, empowerment, and the
          dream of a brighter tomorrow for all children worldwide.
        </p>
      </div>
    </div>
  </section>
);

export default AboutSection;

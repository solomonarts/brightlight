import { React } from "react";
import aboutpic from "../assets/images/bg/bbpic1.png";

const AboutSection = () => (
  <section
    id="about"
    className="py-16 text-white bg-[#ff0000] lg:px-24 xl:px-72 about"
  >
    <div className="container grid gap-8 px-4 py-10 mx-auto md:grid-cols-2 bg-black/30 rounded-xl">
      <div className="text-center md:text-left">
        <h2 className="sticky mb-4 text-3xl font-extrabold uppercase top-20">
          About Bobi Wine <br />{" "}
          <span className="text-black lowercase">
            From the Ghetto to a Global Icon of Hope and Freedom
          </span>
        </h2>
        <img src={aboutpic} alt="Bobi Wine" className="rounded-lg shadow-lg" />
      </div>
      <div className="flex flex-col gap-5">
        <div class="about_left_text">
          Start trading $BOBI freely on the Blockchain.
        </div>
        <p className="text-lg leading-relaxed">
          From the Ghetto streets of Kamwokya to the national stage, Bobi Wine’s
          story is a living testament to the power of resilience and courage.
          Born into struggle, he rose through music to become a voice for the
          voiceless, speaking truth to power in every lyric. <br />
          <br />
          His journey was not without sacrifice. Bobi faced unimaginable
          trials—brutality, loss, and imprisonment. In 2018, he stood unbroken
          after enduring torture and losing his driver, a stark reminder of the
          cost of standing up against oppression. Through it all, he emerged
          stronger, lifting his fist high as a symbol of resistance, hope, and
          determination. <br />
          <br />
          From representing his people as a Member of Parliament to challenging
          for the presidency, Bobi Wine became more than a leader—he became a
          movement. His unwavering strength and fight for justice have made him
          a global icon of hope, freedom, and prosperity. <br />
          <br />
          His strength and courage ignited a movement, becoming the most
          memorable meme of our time. Celebrate the ideals Bobi Wine stands
          for—hope, freedom, and the dream of a brighter tomorrow.
        </p>
      </div>
    </div>
  </section>
);

export default AboutSection;

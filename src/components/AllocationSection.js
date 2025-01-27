import { React } from "react";
import allocationpic from "../assets/images/bg/allocation.jpeg";

const AllocationSection = () => (
  <section
    id="allocation"
    className="py-16 bg-gradient-to-t from-[#210000] to-black border-b-[#ff0000] border-b-4 allocation lg:px-24 xl:px-72"
  >
    <div className="container px-4 mx-auto text-center">
      <h2 className="mb-8 text-5xl font-bold text-[#ff0000]">Allocation</h2>
      <p className="text-white mb-8 text-[20px]">
        There are 212,500,000 $BOBI available on day one and will grow to a
        total of 1 billion $BOBI over three years. Each group's allocation are
        released on their own schedule over 3 years.
      </p>
      <div className="flex justify-center">
        <img
          src={allocationpic}
          alt="Allocation Chart"
          className="w-4/5 h-auto rounded-lg shadow-lg"
        />
      </div>
      <p className="mt-10 text-[12px] font-light text-white">
        Be part of a movement that celebrates courage, hope, and the power of
        community. The BOBI Meme embodies resilience and unity, inspired by the
        strength to rise above adversity and fight for a future where freedom
        and opportunity thrive. Together, we stand for ideals that lift us all.
        Rise with BOBI! ✊ Here, See Card Allocation Here
      </p>
    </div>
  </section>
);

export default AllocationSection;

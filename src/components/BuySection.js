import React from "react";
import { Button } from "antd";
import solanalg from "../assets/images/logos/solana-sol-logo_1solana-sol-logo.webp";
import usdc8 from "../assets/images/logos/usdc.webp";

const BuySection = ({ openDock }) => (
  <section
    id="buy"
    className="py-16 bg-white buy lg:px-24 xl:px-72 h-[60vh] flex flex-col justify-center"
  >
    <div className="container px-4 mx-auto text-center">
      <h2 className="mb-8 text-5xl font-bold">Buy $BOBI with Crypto!</h2>
      <div className="flex items-center justify-center gap-10 mb-8">
        <div className="flex flex-col justify-center rounded-full">
          <img src={usdc8} className="w-24 h-auto" />
        </div>
        <div className="flex flex-col justify-center h-16 p-2 bg-black rounded-full">
          <img src={solanalg} className="w-12 h-auto aspect-square" />
        </div>
      </div>
      <div className="flex justify-center mb-10 space-x-4">
        <button className="px-6 py-2 text-white bg-[#ff0000] rounded-md text-[28px] uppercase font-extrabold">
          Buy Now
        </button>
      </div>
      <p className="text-black text-[12px]">
        Be part of a movement that celebrates courage, hope, and the power of
        community. The BOBI Meme embodies resilience and unity, inspired by the
        strength to rise above adversity and fight for a future where freedom
        and opportunity thrive. Together, we stand for ideals that lift us all.
        Rise with BOBI! ✊{" "}
        <span
          className="text-yellow-500 cursor-pointer"
          onClick={() => openDock("terms")}
        >
          Here
        </span>
        , See Privacy Policy{" "}
        <span
          className="text-yellow-500 cursor-pointer"
          onClick={() => openDock("privacy")}
        >
          Here
        </span>
      </p>
    </div>
  </section>
);

export default BuySection;

import { notification } from "antd";
import React, { useState } from "react";

function ContactAddress() {
  const [address] = useState("0x1234...abcd");

  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    notification.success({
      message: "Address Copied",
      description:
        "The address has been successfully copied to your clipboard.",
      placement: "topRight",
    });
  };
  return (
    <div className="bottom-0 flex flex-col items-center justify-center h-[50vh] border-b-[#9d0505] border-b-4 lg:px-24 xl:px-72">
      <h6 className="text-[50px] font-bold mb-4 text-[#ff0000] text-center">
        Solana Contract Address
      </h6>
      <div className="w-11/12 p-1 bg-black rounded-lg bg-opacity-90 md:w-3/5">
        <div className="flex items-center px-4 py-2">
          <span className="flex-grow text-white truncate">{address}</span>
          <button
            type="primary"
            className="px-4 py-2 text-white bg-[#ff0000] rounded-lg hover:bg-red-500"
            onClick={handleCopy}
          >
            Copy Address
          </button>
        </div>
      </div>
      <div className="p-10">
        <h6 className="text-center text-[12px]">
          The $BOBI WINE memes are a tribute to Bobi Wine's values and
          principles. They are designed to foster community engagement and
          symbolize solidarity with his vision. These memes are strictly meant
          for community support and engagement; they are not investments, do not
          represent investment contracts, and are not to be considered
          securities in any form.
        </h6>
      </div>
    </div>
  );
}

export default ContactAddress;

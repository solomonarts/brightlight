import React from "react";

const FAQSection = () => (
  <section id="faq" className="py-16 text-white bg-black faq">
    <div className="container px-4 mx-auto">
      <h2 className="mb-8 text-3xl font-bold text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        <details className="text-black bg-gray-100 rounded-lg shadow">
          <summary className="p-4 font-semibold cursor-pointer">
            Is this an official Bobi product?
          </summary>
          <p className="p-4">
            Yes, this is officially supported by the Bobi Wine community.
          </p>
        </details>
        <details className="text-black bg-gray-100 rounded-lg shadow">
          <summary className="p-4 font-semibold cursor-pointer">
            How can I get Bobi Memes?
          </summary>
          <p className="p-4">
            Bobi Memes are available for purchase on our platform.
          </p>
        </details>
      </div>
    </div>
  </section>
);

export default FAQSection;

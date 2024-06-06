/* eslint-disable react-refresh/only-export-components */

import FAQComponent from "../../components/LandingPageComponents/FAQComponent";
import faq from "../../utils/faq";

const FAQ = () => {
  return (
    <>
      <div>
        <h1
          className=" text-center font-LufgaBold font-bold
          lg:text-[2.3rem] md:text-[2rem] text-[2.5rem]
        "
        >
          Frequently <span className=" text-[#5FC04A]">Asked</span> Questions
        </h1>
        <p className="text-center pt-[2vh] lg:pb-[20vh] pb-[10vh] font-LufgaRegular">
          Find answers to common queries about Argus features, usage, and
          integration
        </p>
        <div className="grid md:grid-cols-2 justify-center items-center">
          {faq.map((data, index) => {
            return <FAQComponent key={index} data={data} />;
          })}
        </div>
      </div>
    </>
  );
};

export default FAQ;

// Frequently Asked Questions

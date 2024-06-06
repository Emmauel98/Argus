import PricingOne from "../../components/LandingPageComponents/PricingOne";
import { explorer, innovator, revolutionary, visionary } from "../../utils/Pricing";
import pricingbg from "../../assets/images/pricingbg.png";
import PricingTwo from "../../components/LandingPageComponents/PricingTw0";
visionary

const Pricing = () => {
  return (
    <>
      <div className="mt-[1rem] mb-[10vh] py-[1rem] px-[5vw]"
      style={{
        backgroundImage: `url(${pricingbg})`,
        backgroundPosition: `center`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `cover`,
      }}
      >
        <h1
          className=" text-center font-LufgaBold font-bold
          lg:text-[2.3rem] md:text-[2rem] text-[2.5rem]
        "
        >
          Start making <span className=" text-[#5FC04A]">smarter</span> decisions, <br />{" "}
          <span className=" text-[#9CA3AF]">Choose a plan.</span>
        </h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
            <PricingOne data={explorer} name={'Explorer'} />
            <PricingTwo data={innovator} name={"Innovator"} />
            <PricingTwo data={revolutionary} name={"Revolutionary"} />
            <PricingOne data={visionary} name={"Visionary"} />
        </div>
        <div 
         className=" text-[#5FC04A] md:flex justify-center gap-[4rem] font-LufgaRegular
         font-normal mt-[10vh] text-center
         ">
            <p>Free trial</p>
            <p>Cancel anytime</p>
            <p>Support included</p>
        </div>
      </div>
    </>
  );
};

export default Pricing;


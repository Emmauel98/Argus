import AISoln from "../../components/LandingPageComponents/AISoln";
import aiFeatures from "../../utils/aifeature";

const AiPoweredSoln = () => {
  return (
    <>
      <div className="mt-[5rem] lg:mt-[1rem] md:mt-[10rem] mb-[10vh]">
        <h1
          className=" text-center font-LufgaBold font-bold
          lg:text-[2.3rem] md:text-[2rem] text-[2.5rem]
        "
        >
          Your <span className=" text-[#5FC04A]">AI-Powered</span> Solution in{" "}
          <br />{" "}
          <span className=" text-[#9CA3AF]">
            the Fight Against Shoplifting.
          </span>
        </h1>
        <p className="text-center pt-[2vh] lg:pb-[20vh] pb-[10vh] font-LufgaRegular">
          Argus transforms your security system from passive surveillance into{" "}
          <br />
          proactive protection, using AI to continuously analyze CCTV footage{" "}
          <br />
          and identify suspicious behavior patterns in real-time.
        </p>
        <div
          className=" md:flex lg:gap-[10rem] mx-[2rem] md:mx-0 md:justify-center
        md:gap-[2rem]
        "
        >
          {aiFeatures.map((data, index) => {
            return <AISoln key={index} data={data} />;
          })}
        </div>
      </div>
    </>
  );
};

export default AiPoweredSoln;

//

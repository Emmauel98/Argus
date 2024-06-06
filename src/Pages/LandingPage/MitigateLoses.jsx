import argusbot from "../../assets/images/argusbot.png";
import ArgusCCTVMonitoring from "../../components/LandingPageComponents/ArgusCCTVMonitoring";

const MitigateLoses = () => {
  return (
    <>
      <div className="mt-[1rem] mb-[10vh]">
        <h1
          className=" text-center font-LufgaBold font-bold
          lg:text-[2.3rem] md:text-[2rem] text-[2.5rem]
        "
        >
          Mitigate <span className=" text-[#5FC04A]">Losses</span> from <br />{" "}
          <span className=" text-[#9CA3AF]">Shoplifting.</span>
        </h1>
        <p className="text-center pt-[2vh] pb-[5vh] font-LufgaRegular">
          Every time a shoplifter walks out your door, it&apos;s not just a
          product that&apos;s lost. It&apos;s a <br /> direct hit to your bottom
          line. Inventory shrinkage due to theft costs grocery stores <br />{" "}
          billions each year… That&apos;s money that could be reinvested in your{" "}
          <br /> business, your staff, or passed on as savings to your
          customers.
        </p>
        <div className="lg:flex ">
          <div className=" lg:block flex justify-center">
            <img src={argusbot} alt="" className=" lg:h-[85%]" />
          </div>
          <div>
            <h1
              className=" text-center font-LufgaBold font-bold
              lg:text-[2.3rem] md:text-[2rem] text-[2.5rem]
              lg:text-left mt-[3rem] lg:mt-0
              "
            >
              <span
                className=" text-[#5FC04A]
              "
              >
                Protect Your
              </span>{" "}
              Bottom <br /> Line.
            </h1>
            <p className="lg:text-left pt-[2vh] pb-[5vh] font-LufgaRegular text-center">
              Maybe you have CCTV cameras, but who has the time to monitor{" "}
              <br /> them constantly? Hiring security staff is expensive and not
              always a <br />
              practical solution for smaller stores. Shoplifters are savvy, and
              they <br /> exploit these weaknesses. The good news? You donapos;t
              have to accept <br /> these losses as the cost of doing business.
              With Argus, thereapos&apos;s a <br /> smarter way to protect your
              store – and your profits.
            </p>
            <div 
            className=" md:flex lg:gap-[2rem] lg:justify-start mx-[2rem] md:mx-0 md:justify-center
            md:gap-[8rem]
            ">
              <ArgusCCTVMonitoring
                heading={"CCTV Monitoring Limitations"}
                list_one_A={"Constant monitoring is"}
                list_one_B={"impractical and time-consuming."}
                list_two_A={"Security staff are costly and not"}
                list_two_B={"always feasible."}
              />
              <ArgusCCTVMonitoring
                heading={"CCTV Monitoring Limitations"}
                list_one_A={"Constant monitoring is"}
                list_one_B={"Shoplifters take advantage of existing security gaps."}
                list_two_A={"Security staff are costly and not"}
                list_two_B={"Argus offers a smarter, more efficient way to secure your store."}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MitigateLoses;

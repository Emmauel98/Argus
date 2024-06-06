import Navbar from "../../constant/NavBar/Navbar";

const Herosection = () => {
  return (
    <>
      <div
        
        className="lg:h-[125vh] h-[120vh] md:h-[100vh] 
        "
      >
        <div className=" flex justify-center items-center my-[5vh] relative lg:top-[-1rem]">
          <Navbar />
        </div>
        <div className="flex justify-center items-center">
          <div
            className=" flex justify-center items-center
            bg-[#EFF9F3] lg:w-[20vw] text-[.9rem] font-medium
            px-[1rem] py-[.6rem]  rounded-3xl ring-2 ring-white
            "
          >
            We Just Launched a new product
          </div>
        </div>
        <div className="my-[5vh]">
          <h1 className=" lg:text-[2.7rem] text-[1.7rem] text-center font-semibold font-LufgaBold">
            <span className=" text-[#5FC04A] md:text-[2.6rem]">Stop Shoplifters</span> In Their{" "}
            <br />
            Tracks. Protect Profits <br /> with Argus.
          </h1>
        </div>
        <div className="mb-[5vh]">
          <p className="text-center font-medium font-LufgaRegular px-[2rem] lg:px-0">
            Are you tired of rising prices and shrinking profits due to <br />
            shoplifting? Take control with real-time AI security that works{" "}
            <br /> with your CCTV system 24/7.
          </p>
        </div>
        <div className="flex justify-center mb-[5vh] ">
          <div
            className=" lg:w-[39vw] lg:h-[35vh] bg-white
              text-center rounded-3xl py-[5vh] w-[75vw]
              ring-4 ring-[rgba(255,255,255,.6)]
              "
          >
            <h1 className="mb-[.7rem] mt-[1rem] font-bold font-LufgaMedium lg:text-[1.2rem]">
              Let’s get started
            </h1>
            <h6 className="mb-[.9rem]  font-LufgaRegular font-normal">
              Enter your email to get started
            </h6>
            <form action="" 
             className="mb-[.5rem] md:flex md:justify-center columns-2
            ">
              <input
                type="text"
                placeholder="Enter your email address"
                className=" bg-gradient-to-tr from-[rgba(203,239,197,1)] to-[#FFFFFF]
                md:px-[1.5vw] py-[1.9vh] md:w-[60%] rounded-3xl placeholder:font-LufgaLight
                w-[65vw] px-[3vw] ml-[5vw] md:ml-0 mb-[.5rem] md:mb-0
                "
              /> 
              <button 
               className="bg-gradient-to-tr from-[#70B47B] to-[#37964B]
               font-LufgaRegular font-extralight lg:px-[1.5vw] lg:py-[1.5vh] rounded-3xl
               text-white md:mx-[1rem] lg:w-[22%] md:px-[3vw] md:py-[.1vh] py-[1.5vh] px-[6vw]
               mx-[70%] 
               ">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Herosection;

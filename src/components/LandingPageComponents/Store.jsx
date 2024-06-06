import Leaf from "./Leaf";

const Store = () => {
  return (
    <div className="mt-[5rem] bg-[#F9FAFB] lg:px-[10rem] rounded-3xl pb-[5rem]">
      <div className=" pt-[5rem]">
        <Leaf text={"Ready"} />
      </div>
      <h1
        className=" text-center font-LufgaBold font-bold
          lg:text-[2.3rem] md:text-[2rem] text-[2.5rem]
        "
      >
        Start Protecting Your Store Now.
      </h1>
      <p className="text-center pt-[2vh] lg:pb-[20vh] pb-[10vh] font-LufgaRegular">
        Experience the synergy of your favorite tools working seamlessly <br />
        together, all powered by Horizon&apos;s cutting-edge AI analytics.
      </p>
      <form
        action=""
        className="mb-[.5rem] md:flex md:justify-center columns-2
            "
      >
        <input
          type="text"
          placeholder="yourmail@gmail.com"
          className=" bg-[#E5E7EB] placeholder:text-[#374151]
                md:px-[1.5vw] py-[1.9vh] lg:w-[30%] rounded-md placeholder:font-LufgaLight
                w-[80vw] px-[3vw] ml-[5vw] md:ml-0 mb-[.5rem] md:mb-0 md:w-[50%]
                "
        />
        <button
          className="bg-gradient-to-tr from-[#70B47B] to-[#37964B]
               font-LufgaRegular font-extralight lg:px-[1.5vw] lg:py-[1.5vh] rounded-md
               text-white md:mx-[1rem] lg:w-[10%] md:px-[3vw] md:py-[.1vh] py-[1.5vh] px-[6vw]
               mx-[50%] w-[50vw] md:w-[20%]
               "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Store;
//Experience the synergy of your favorite tools working seamlessly
//together, all powered by Horizon's cutting-edge AI analytics.

import reduceInventoryloss from "../../assets/images/reduceInventoryloss.png";
import featureofargusbg from "../../assets/images/featureofargusbg.png";
import features from "../../utils/features";

const FeatureOfArgus = () => {
  return (
    <>
      <div className="">
        <h1
          className=" text-center font-LufgaBold font-bold
          lg:text-[2.3rem] md:text-[2rem] text-[2.5rem]
        "
        >
          Features of Argus
        </h1>
        <p className="text-center pt-[2vh] pb-[5vh] font-LufgaRegular">
          Argus offers a suite of advanced features designed to protect your{" "}
          <br />
          store from shoplifting and enhance overall security.
        </p>
        <div
          className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 
          gap-[1.5rem] text-center lg:px-[5vw] justify-center items-center
          lg:py-[5rem] rounded-[3rem]  py-[4rem] lg:gap-[1rem]
         "
          style={{
            backgroundImage: `url(${featureofargusbg})`,
            backgroundPosition: `center`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `cover`,
          }}
        >
          {features.map((data) => {
            const { id, heading, description } = data;
            return (
              <div
                key={id}
                className=" bg-[#FCFAFE] lg:h-[40vh] w-[85%] ring-4 ring-white
              rounded-lg  md:mx-[3vw] lg:mx-0 mx-[7vw]
              "
              >
                <div
                  className=" flex justify-center items-center py-[3vh]
                "
                >
                  <img src={reduceInventoryloss} alt="" />
                </div>
                <h1 className=" font-LufgaSemiBold font-semibold pb-[4vh]">
                  {heading}
                </h1>
                <p className=" font-LufgaRegular font-normal text-[#5A5D71] pb-[4vh]">
                  {description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FeatureOfArgus;

import Frame_eleven from "../../assets/images/zenith.png";
import Frame_one from "../../assets/Icons/Frame-1.png";
import Frame_two from "../../assets/Icons/Frame-2.png";
import Frame_three from "../../assets/Icons/Frame-3.png";
import Frame_four from "../../assets/Icons/Frame-4.png";
import Frame_five from "../../assets/Icons/Frame-5.png";
import Frame_six from "../../assets/Icons/Frame-6.png";
import Frame_seven from "../../assets/Icons/Frame-7.png";
import Frame_eight from "../../assets/Icons/Frame-8.png";
import Frame_nine from "../../assets/Icons/Frame-9.png";
import Frame_ten from "../../assets/Icons/Frame-10.png";
import Frame_twelve from "../../assets/Icons/Frame.png";

const LatestSoftware = () => {
  return (
    <>
      <div className="pb-[20vh]">
        <h1
          className=" text-center font-LufgaBold font-bold
         lg:text-[2.3rem] md:text-[2rem] text-[2.5rem]
        "
        >
          Experience the Latest Software
        </h1>
        <p className="text-center pt-[2vh] pb-[5vh] font-LufgaMedium">
          Our AI-Driven software supports different types of CCTV brands
        </p>
        <div
          className=" grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2
     gap-[2rem] px-[3vw]
        "
        >
          {[
            Frame_one,
            Frame_two,
            Frame_three,
            Frame_four,
            Frame_five,
            Frame_six,
            Frame_seven,
            Frame_eight,
            Frame_nine,
            Frame_ten,
            Frame_eleven,
            Frame_twelve,
          ].map((data, index) => {
            return (
              <>
                <div
                  key={index}
                  className=" ring-4 ring-white flex justify-center rounded-md py-[1vh]
                bg-[#F8F6FE]
                "
                >
                  <img src={data} alt="" />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default LatestSoftware;

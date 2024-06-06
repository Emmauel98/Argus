/* eslint-disable react/prop-types */
import line from "../../assets/images/line.png";

const TestimonyCard = ({data}) => {
    const {image,description, name, location} = data;
  return (
    <>
      <div 
      className=" bg-[#FBFFFC] lg:w-[28vw] flex justify-center mx-[1rem]
       rounded-2xl mt-[6rem] items-center">
        <div 
        className=" ring-2 ring-[#EDE8FB] px-[3rem] w-[95%] mt-[4rem] mb-[1rem]
        rounded-2xl relative
        ">
            <div className=" absolute top-[-5vh]">
              <img src={image} alt="" />
            </div>
            <h1 className=" font-LufgaRegular font-normal mt-[4rem] lg:text-[1.2rem]">{name}</h1>
            <h1 className=" font-LufgaMedium font-medium text-[#8E90A3] lg:text-[1.2rem]">
            {location}
            </h1>
            <img src={line} alt="" className=" mb-[1rem]" />
            <p className="font-LufgaRegular font-normal text-[#5A5D71] pb-[1rem]">
             {description}
            </p>
        </div>
      </div>
    </>
  );
};

export default TestimonyCard;

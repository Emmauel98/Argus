/* eslint-disable react/prop-types */

const AISoln = ({data}) => {
    const {image, text, textb,textc}  = data;
  return (
    <>
      <div className="mb-[2rem] md:mb-0">
        <div
          className=" bg-[#5FC04A] lg:w-[3vw] w-[13vw] flex justify-center items-center
          rounded-[30%] lg:py-[1.5vh] py-[1vh] md:w-[8vw]
          "
        >
          <img src={image} alt="" className=" lg:w-[60%]" />
        </div>
        <h1 className="font-LufgaBold font-semibold py-[.5rem]">Connect</h1>
        <p>
          {text} <br /> {textb}
          <br /> {textc}
        </p>
      </div>
    </>
  );
};

export default AISoln;

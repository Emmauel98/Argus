/* eslint-disable react/prop-types */
import spark  from "../../assets/Icons/spark.png";
import leaf  from "../../assets/images/leaf.png";

const Leaf = ({text}) => {
  return (
    <>
        <div className=" flex justify-center items-center pb-[9vh]">
            <div className="">
                <img src={leaf} alt="" className=" lg:w-[4vw] md:w-[10vw] w-[15vw] " />
            </div>
            <div 
             className=" flex gap-[.5rem] lg:w-[15vw] bg-[#EDF6E8] px-[2vw]
             rounded-3xl py-[1vh] w-[50vw] md:w-[30vw] justify-center ring-4 ring-white
             ">
                <img src={spark} alt="" />
                <p className=" text-center lg:mt-[.1rem]">{text}</p>
            </div>
            <div className="">
            <img src={leaf} alt="" className=" lg:w-[4vw] md:w-[10vw] w-[15vw] rotate-180" />
            </div>
        </div>
    </>
  )
}

export default Leaf;
import TestimonyCard from "../../components/LandingPageComponents/TestimonyCard";
import profiles from "../../utils/profile";


const Testimony = () => {
  return (
    <>
        <div className="mt-[1rem] mb-[10vh]">
        <h1
          className=" text-center font-LufgaBold font-bold
          lg:text-[2.3rem] md:text-[2rem] text-[2.5rem]
        "
        >
          See What Other <span className=" text-[#5FC04A]">Store</span> Owners <br />{" "}
          <span className=" text-[#9CA3AF]">Are Saying About Argus.</span>
        </h1>
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1
         justify-center items-center ">
            {
                profiles.map((data,index)=>{
                    return <TestimonyCard key={index} data={data} />
                })
            }
        </div>
        </div>
    </>
  )
}

export default Testimony;


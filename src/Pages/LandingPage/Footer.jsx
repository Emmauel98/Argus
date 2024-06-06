/* eslint-disable react/prop-types */
import offices from "../../utils/offices";
import youtube from "../../assets/images/youtube.png";
import twitter from "../../assets/images/twitter.png";
import instagram from "../../assets/images/instagram.png";

const Footer = () => {
  return (
    <>
      <div>
        <div className=" md:flex justify-center items-center lg:gap-[10rem] md:gap-[3rem]">
          <div>
            <p className="md:text-left pt-[2vh] pb-[5vh] font-LufgaRegular text-center
            font-semibold
            ">
              Start your journey now.
            </p>
            <form
              action=""
              className="mb-[.5rem]
            "
            >
              <input
                type="text"
                placeholder="yourmail@gmail.com"
                className=" bg-[#E5E7EB] placeholder:text-[#374151]
                md:px-[1.5vw] py-[1.9vh] lg:w-[90%] rounded-md placeholder:font-LufgaLight
                w-[80vw] px-[3vw] ml-[9vw] md:ml-0 md:w-[90%] mb-[1rem]
                "
              />{" "}
              <br />
              <button
                className="bg-gradient-to-tr from-[#70B47B] to-[#37964B]
               font-LufgaRegular font-extralight lg:px-[1.5vw] lg:py-[1.5vh] rounded-md
               text-white md:mx-[-0.1rem] lg:w-[90%] md:px-[3vw] md:py-[1.5vh] py-[1.5vh] px-[6vw]
               mx-[9vw] w-[80vw] md:w-[90%]
               "
              >
                Submit
              </button>
            </form>
            <p className="text-[rgba(0,0,0,.6)] px-[2.5rem] md:px-0">
              You are accepting our terms and privacy statement <br /> with
              subscribing our mail.
            </p>
          </div>
          <div className=" px-[3rem] md:px-0">
            <p className=" text-[rgba(0,0,0,.6)]">Unit</p>
            <ul className="font-medium">
              <li>Home</li>
              <li>Features</li>
              <li>Pricing</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className=" mt-[12vh] px-[3rem] md:px-0">
            <p className=" text-[rgba(0,0,0,.6)]">Offices</p>
            {offices.map((data, index) => {
              return <Offices key={index} data={data} />;
            })}
          </div>
        </div>
        <div className=" lg:flex justify-between px-[12vw]">
          <p className=" text-[rgba(0,0,0,.6)]">©All rights reserved.</p>
          <div className=" lg:flex gap-[4rem]">
            {[
              { img: youtube, title: "youtube" },
              { img: twitter, title: "Twitter" },
              { img: instagram, title: "Instagram" },
            ].map((data, index) => {
              const { img, title } = data;

              return (
                <div key={index} className="flex gap-1">
                  <div>
                    <div className=" flex justify-center items-center">
                      <img src={img} alt="" className="mt-[1vh]" />
                    </div>
                  </div>
                  <p>{title}</p>
                </div>
              );
            })}
          </div>
          <p>Argus</p>
        </div>
      </div>
    </>
  );
};

export default Footer;

const Offices = ({ data }) => {
  const { country, li_one, li_two } = data;
  return (
    <>
      <div className="mb-[2rem]">
        <div>
          <h1 className=" font-medium">{country}</h1>
          <ul>
            <li>{li_one} </li>
            <li>{li_two} </li>
          </ul>
        </div>
      </div>
    </>
  );
};

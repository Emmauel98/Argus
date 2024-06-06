import { useRef, useState } from "react";
import BackButton from "../../components/BackButton";
import Button from "../../components/Button";
// import IpAddressData from "../../utils/IpAddress";
import IPAddressTableList from "./IPAddressTableList";
import trash from "../../assets/Icons/trash.png";

const IpAddressComponent = () => {
  const [IpAddressData, setIpAddressData] = useState([]);
  const [id, setId] = useState(0);
  const inputValue = useRef();
  const handle = (e) => {
    e.preventDefault();
    const newId = id + 1;
    setId(newId);
    setIpAddressData([...IpAddressData, { id: newId, ipAddress: inputValue.current.value, trash }]);
    inputValue.current.value = '';
  };
  const deleteIpAddress = (id) => {
    setIpAddressData((prevData) => prevData.filter((item) => item.id !== id));
  };

  return (
    <>
      <BackButton />
      <div className="flex justify-center mg:mt-[20vh] mt-[10vh]">
        <div className="">
          <div className="text-center leading-8">
            <h1 className=" font-semibold">Enter your IP address</h1>
            <h4 className=" text-[#5A5D71] font-medium">
              Start protecting your store now{" "}
            </h4>
          </div>
          <div className="mt-[5vh] md:flex justify-center gap-[1rem]">
            <div>
              <input
                type="text"
                placeholder="221.192.199.49"
                className=" bg-[#CBEFC53D] p-[.5rem] rounded-2xl mr-[.5rem] outline-none
              md:w-[20vw] px-[1.5rem] w-[80vw]
              "
                ref={inputValue}
              />
            </div>
            <button
              className="bg-gradient-to-r from-[#70B47B] to-[#37964B] text-white
             px-[1rem] py-[.1rem] lg:w-[10%] rounded-2xl w-[30vw] lg:mt-0 mt-[1rem]
             "
               onClick={(e)=>handle(e)}
            >
              Add
            </button>
          </div>
          {IpAddressData.length > 0 ? (
            <>
              <div className=" lg:w-[70vw] w-[80vw] bg-red-400 mt-[3rem]">
                <ul className="odd:bg-white even:bg-slate-50">
                  <li
                    className="pb-[5vh] mb-[.5rem] lg:px-[2rem] px-[1rem] bg-[#CBEFC53D] 
                "
                  >
                    <div className="flex justify-between items-center relative top-[1rem]">
                      <div className=" flex gap-[5vw]">
                        <span>s/n</span>
                        <span>IP address</span>
                      </div>
                      <span>Action</span>
                    </div>
                  </li>
                  {IpAddressData.map((data, index) => {
                    const { id, ipAddress, trash } = data;
                    const isEven = index % 2 === 0;

                    return (
                      <IPAddressTableList
                        id={id}
                        ipAddress={ipAddress}
                        trash={trash}
                        key={id}
                        deleteIpAddress={deleteIpAddress}
                        color={isEven ? "#c40f4b" : "#CBEFC53D"}
                      />
                    );
                  })}
                </ul>
              </div>
              <Button />
            </>
          ) : (
            <div className=" text-[#000000] mt-[10vh] text-center opacity-50 font-light w-screen">
              <h4 className="text-center text-[3rem]">No IP address</h4>
              <h4 className="text-[3rem]">found</h4>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default IpAddressComponent;

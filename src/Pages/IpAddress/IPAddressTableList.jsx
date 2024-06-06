/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useNavigate,  } from "react-router-dom";

const IPAddressTableList = ({ id, ipAddress, trash, color,deleteIpAddress }) => {
  const navigate = useNavigate();
  const deleteIp = ()=>{
    deleteIpAddress(id)
  }

  return (
    <>
      <li className={`pb-[5vh] bg-[${color}] mb-[.5rem] lg:px-[2rem] px-[1rem]`}>
        <div className="flex justify-between items-center relative top-[1rem]">
          <div className=" flex gap-[5vw]">
            <span>{id}</span>
            <span className=" hover:cursor-pointer"
            onClick={()=> navigate('/ipimages')}
            >{ipAddress}</span>
          </div>
          <span
           onClick={() => deleteIp(id)}
          >
            <img src={trash} alt="" />
          </span>
        </div>
      </li>
    </>
  );
};

export default IPAddressTableList;

/* eslint-disable react/prop-types */
import alert_circle from "../assets/Icons/alert-circle.png";

const Input = ({ type, placeholder, labelName }) => {
  return (
    <>
      <div className="mb-[1.2rem] relative">
        <label htmlFor="">
          <p className=" font-normal mb-[.3rem] ml-[5vw] md:ml-0">{labelName}</p>
          <div className=" relative ">
            <input
              type={type}
              placeholder={placeholder}
              required
              className="lg:w-[25vw] border-2 border-[#D0D5DD] rounded-md
            px-[.5rem] w-[80vw] md:w-[50vw] py-[.5rem] invalid:border-pink-500
             invalid:text-pink-600 peer ml-[5vw] md:ml-0
            "
            />
            <img src={alert_circle} alt="" className=" invisible peer-invalid:visible
             absolute top-[.9rem] lg:right-[2.5rem] md:right-[1rem] right-[3rem]" />
          </div>
        </label>
      </div>
    </>
  );
};

export default Input;

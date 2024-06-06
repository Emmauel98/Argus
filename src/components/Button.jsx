import { useNavigate } from "react-router-dom";

const Button = () => {
  const navigate = useNavigate();
  return (
    <div className=" float-right my-[1rem]">
      <button
        className="bg-gradient-to-r from-[#70B47B] to-[#37964B] text-white
             px-[1rem] py-[.1rem] w-[100%] rounded-md
             "
             onClick={()=>navigate('/ipimages')}
      >
        Submit
      </button>
    </div>
  );
};

export default Button;

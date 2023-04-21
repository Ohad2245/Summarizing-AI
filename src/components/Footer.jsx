import { AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import {logo} from '../assets'
const Footer = () => {
  return (
    <div className="footer-container" style={{ position: "relative" }}>
      <div className="w-[100%] h-[2px] my-8 bg-black opacity-10 filter blur-[0.5px] " />

      <p className="font-normal text-[14px] text-black opacity-50 ">
        Copyright © 2023 - . All right reserved Ohad
      </p>

      <p className="icons">
        <AiFillLinkedin />
        <AiOutlineTwitter />
        <BsFacebook style={{ width: "25" }} />
      </p>
      <div className="roommie2 font-thin text-[24px] leading-[30px] text-black footer">
        <img src={logo}/>
      </div>
    </div>
  );
};

export default Footer;
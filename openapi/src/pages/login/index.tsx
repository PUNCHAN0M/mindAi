import LoginForm from "@/components/Login-registerForm/LoginForm";
import Navbar from "@/components/navbar"; 
import SvgSignUp from "@/components/SVG/SvgSignUp";
import { loginSchema } from "@/modules/login-register/login";
import { useState } from "react";

export default function login() {
  // const [formLogin, setFormLogin] = useState<formTextSchema>();

  const handleSubmitLogin = (value: loginSchema): void => {
    // setFormLogin(value);
    // console.log(value);
  };
  return (
    <div className="flex  w-screen h-screen">
      <div className="flex flex-col bg-white rounded-3xl shadow-lg  w-[768px] h-[489px] m-auto justify-center items-center">
        <div className="flex flex-col bg-white items-center">
          <div className="flex bg-gray-10  rounded-full w-[40px] h-[40px] justify-center items-center">
            <SvgSignUp />
          </div>
          <div className="text-[18px] ">เข้าสู่ระบบ</div>
          <div className="text-[14px] text-[#788BA5]">กรอกบัญชีอีเมลและรหัสผ่านเพื่อเข้าสู่ระบบ</div>
        </div>
        <LoginForm submitLogin={handleSubmitLogin} />
      </div>
    </div>
  );
}

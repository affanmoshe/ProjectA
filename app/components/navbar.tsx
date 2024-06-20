import Image from "next/image";
import Logo from "../../public/assets/Logo.svg";
import User from "../../public/assets/User.svg";
import Menu from "../../public/assets/Menu.svg";



export function Navbar() {
  return (
    <nav className="flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-20">
      <div className="flex items-center font-bold font-size: 1.125rem">
        McniceTV+
        <div className="hidden lg:flex pl-[74px] gap-x-[56px]">
            <p>
              <a href="#features">Features</a>
            </p>
        </div>
        <div className="hidden lg:flex pl-[74px] gap-x-[56px]">
            <p>
              <a href="#pricing">Pricing</a>
            </p>
        </div>
        <div className="hidden lg:flex pl-[74px] gap-x-[56px]">
            <p>
              <a href="#team">OurTeam</a>
            </p>
        </div>
        <div className="hidden lg:flex pl-[74px] gap-x-[56px]">
            <p>
              <a href="#testimonial">Testimonial</a>
            </p>
        </div>
      </div>

      <div className="flex gap-x-5">
        <a href="#pricing" className="hidden lg:block font-medium text-[#36485C] pr-[56px]">
          Create an Account
        </a> 

        <div className="flex items-center gap-x-2">
          <Image src={User} alt="User Profile" />
          <span className="hidden font-medium text-[#36485C] lg:block">
            Sign in 
          </span>
        </div>

        <Image src={Menu} alt="Menu Button" className="lg:hidden" />
      </div>
    </nav>
  );
}
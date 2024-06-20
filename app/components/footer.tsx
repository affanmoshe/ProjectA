import Image from "next/image";
import Logo from "../../public/assets/Logo.svg";
import Facebook from "../../public/assets/Facebook.svg";
import Twitter from "../../public/assets/X.svg";
import Feed from "../../public/assets/Feed.svg";

export function Footer() {
  return (
    <div className="pt-[80px] pb-[40px]">
      <div className="flex items-center justify-center gap-x-[12px]">
        <p className="font-bold text-[#36485C] text-[17px]">McNiceTV+</p>
      </div>

      <ul className="flex flex-col items-center gap-y-[32px] pt-[56px] text-[#36485C] sm:flex-row sm:justify-center sm:gap-x-5 sm:pt-5">
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
        <a href="#team">OurTeam</a>
        <a href="#testimonial">Testimonial</a>
      </ul>

      <p className="pt-[56px] text-center text-[14px] font-medium text-[#5F7896] sm:pt-5">
        © Copyright 2024. McNiceTV+. All rights reserved.
      </p>

      <div className="flex items-center justify-center gap-x-[56px] pt-[40px]">
        <a href="https://facebook.com"><Image src={Facebook} alt="Facebook" /></a>
        <Image src={Feed} alt="Feed" />
        <a href="https://Twitter.com"><Image src={Twitter} alt="Twitter" /></a>
      </div>
    </div>
  );
} 
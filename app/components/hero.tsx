import Image from "next/image";
import BlurArrow from "../../public/assets/blue-button.svg";
import Gradient from "../../public/assets/Gradient.svg";
import birdlogo from "../../public/assets/birdlogo.svg";
import { Pricing } from "./pricing";

export function Hero() {
  return (
    <div className="pt-4 lg:pt-10">
      <div className="px-[20px] lg:px-[280px]">
        <h1 className="text-center text-[32px] leading-[40px] font-medium text-[#172026] lg:text-[64px] lg:leading-[72px]">
          Unlimited movies anywhere anytime
        </h1>
        <p className="text-center pt-6 text-[#36485C] lg:text-[18px] lg:leading-7">
          Experience Entertainment Like Never Before! Enjoy endless movies, shows, and sports with our premium TV packages discover hundreds of channels, crystal clear HD, and on-demand content.
        </p> 

        <div className="flex w-full pt-8 justify-center gap-x-6 ">
          <button className="bg-[#4328EB] w-1/2 py-4 px-8 text-white rounded-[4px] lg:w-fit hover:rotate-6 hover:scale-110 transition-all duration-300">
            Try for free
          </button>
          <button className="w-1/2 text-[#4328EB] flex items-center justify-center gap-x-2 lg:w-fit">
            <a href="#pricing">View Pricing</a> 
            <span>
              <Image src={BlurArrow} alt="Learn more" />
            </span>
          </button>
        </div>
      </div>

      <div className="relative flex h-full w-full justify-center">
        <Image
          src={Gradient}
          alt="Gradient"
          className="min-h-[500px] w-full object-cover lg:h-auto"
        />

        <div className="absolute bottom-5 flex w-full flex-col items-center">
          <Image
            src={birdlogo}
            alt="bird logo"
            className="-ml-4 h-[200px] sm:-mb-20 sm:h-[200px] lg:-mb-28 lg:h-auto xl:w-[70%]"
          /> 

          <div className="flex w-full flex-col items-center lg:container lg:flex-row lg:justify-center lg:px-20 pt-0">
            <p className="text-[#FFFFFF] text-center lg:text-[36px] font-bold">
              McNiceTV+
            </p>
          </div>
        </div>
      </div>
    </div>  
  );
}

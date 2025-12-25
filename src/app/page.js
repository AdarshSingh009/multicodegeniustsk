"use client";
import {
  facebookicon,
  instaicon,
  leftarrow,
  mailicon,
  ratingstaricon,
  rightarrow,
  smallstaricon,
  staricon,
} from "@/assets/icon/icon";
import Image from "next/image";
import ClothImage from "@/assets/images/ClothImage.png";
import ClothImage1 from "@/assets/images/ClothImage1.png";
import { useState } from "react";
import TestimonialSlider from "@/components/TestimonialSlider";

export default function Home() {
  const products = Array.from({ length: 8 }, (_, index) => ({
    id: index + 1,
    title: "Gradient Graphic T-shirt",
    price: "₹ 30",
    rating: "4.5/",
    trating: "5",
    image: ClothImage,
  }));
  const [showAll, setShowAll] = useState(false);
  const visibleProducts = showAll ? products : products.slice(0, 4);
  return (
    <>
      <div className="mt-[78px] bg-[#f2f0f1] flex flex-row items-center justify-center w-full">
        <div className="md:max-w-[577px] md:w-full w-[90%] md:py-[103px] py-10 flex flex-col items-start justify-center md:gap-12 gap-5">
          <div className="flex flex-col md:items-start sm:items-center items-start justify-start md:gap-8 gap-[22px]">
            <div className="text-black md:text-[64px] text-[36px] md:text-left sm:text-center text-left font-bold md:leading-[64px] leading-[34px] relative max-w-[577px] sm:tracking-normal tracking-[0.1px]">
              FIND CLOTHES THAT MATCHES YOUR STYLE
              <div className="absolute -top-[35px] -right-[100px] lg:block hidden">
                {staricon}
              </div>
              <div className="absolute bottom-[-73px] left-[-90px] lg:block hidden">
                {smallstaricon}
              </div>
            </div>
            <div className="text-[#00000099] font-satoshi text-base sm:text-center text-left font-normal leading-[1.375] max-w-[545px]">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </div>
            <div className="px-[54px] py-4 text-white font-satoshi text-base font-medium cursor-pointer rounded-[62px] bg-black leading-[1.375] sm:w-auto w-full text-center">
              Shop Now
            </div>
          </div>
          <div className="flex gap-4 md:w-auto w-full md:justify-start justify-center md:flex-nowrap flex-wrap">
            <div className="pl-4 border-none">
              <div className="text-black font-satoshi md:text-[40px] text-[24px] font-bold leading-[1.35]">
                200+
              </div>
              <div className="text-black/60 font-satoshi lg:text-base text-xs font-normal leading-[22px]">
                International Brands
              </div>
            </div>
            <div className="border-l border-black/10 pl-4">
              <div className="text-black font-satoshi md:text-[40px] text-[24px] font-bold leading-[1.35]">
                2000+
              </div>
              <div className="text-black/60 font-satoshi lg:text-base text-xs font-normal leading-[22px]">
                High-Quality Products
              </div>
            </div>
            <div className="md:border-l border-black/10 pl-4">
              <div className="text-black font-satoshi md:text-[40px] text-[24px] font-bold leading-[1.35]">
                30,000+
              </div>
              <div className="text-black/60 font-satoshi lg:text-base text-xs font-normal leading-[22px]">
                Happy Customers
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* new line  */}
      <div className="flex flex-row items-center justify-center w-full">
        <div className="flex flex-col items-start justify-center w-full max-w-[1240px] gap-[55px]">
          <div className="text-black text-center md:text-[48px] text-[32px] font-bold pt-16 w-full leading-[1.2084]">
            NEW ARRIVALS
          </div>
          <div className="grid [grid-template-columns:repeat(auto-fill,minmax(295px,1fr))] gap-5 w-full [place-items:center]">
            {visibleProducts.map((item) => (
              <div
                key={item.id}
                className="space-y-4"
              >
                <div className="w-[295px] h-[298px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="object-cover size-full"
                  />
                </div>

                <div className="md:space-y-[9px] space-y-1">
                  <h2 className="text-black md:text-xl text-base font-bold truncate font-satoshi">
                    {item.title}
                  </h2>

                  <div className="flex items-center gap-1.5">
                    {[...Array(4)].map((_, index) => (
                      <span key={index} className="w-[19px] h-auto *:size-full">
                        {ratingstaricon}
                      </span>
                    ))}
                    <div className="md:text-sm text-xs text-black font-satoshi">
                      {item.rating}{' '}
                      <span className="text-[#00000099] font-satoshi">
                        {item.trating}
                      </span>
                    </div>
                  </div>
                  <div className="md:text-2xl text-xl text-black font-bold font-satoshi">{item.price}</div>
                </div>
              </div>
            ))}
          </div>
          {!showAll && (
            <div className="flex justify-center w-full">
              <button
                onClick={() => setShowAll(true)}
                className="rounded-full border border-black/10 px-[54px] py-4 cursor-pointer font-satoshi"
              >
                View All
              </button>
            </div>
          )}
        </div>
      </div>

      {/* new line */}
      <div className="flex flex-row items-center justify-center w-full">
        <div className="flex flex-col items-start justify-center w-full max-w-[1240px] gap-[55px]">
          <div className="text-black text-center md:text-[48px] text-[32px] font-bold pt-16 w-full">
            TOP SELLING
          </div>
          <div className="grid [grid-template-columns:repeat(auto-fill,minmax(295px,1fr))] gap-5 w-full [place-items:center]">
            {visibleProducts.map((item) => (
              <div
                key={item.id}
                className="space-y-4"
              >
                <div className="w-[295px] h-[298px]">
                  <Image
                    src={ClothImage1}
                    alt={item.title}
                    className="object-cover size-full"
                  />
                </div>

                <div className="md:space-y-[9px] space-y-1">
                  <h2 className="text-black md:text-xl text-base font-bold truncate font-satoshi">
                    {item.title}
                  </h2>

                  <div className="flex items-center gap-1.5">
                    {[...Array(4)].map((_, index) => (
                      <span key={index} className="w-[19px] h-auto *:size-full">
                        {ratingstaricon}
                      </span>
                    ))}
                    <div className="md:text-sm text-xs text-black font-satoshi">
                      {item.rating}{' '}
                      <span className="text-[#00000099] font-satoshi">
                        {item.trating}
                      </span>
                    </div>
                  </div>
                  <div className="md:text-2xl text-xl text-black font-bold font-satoshi">{item.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* new line */}
      <div className="flex flex-col items-center justify-center w-full gap-8">
        <div className="flex flex-row items-start justify-start max-w-[800px] gap-2">
          <div className="text-black text-center leading-[1.2084] md:text-[48px] text-[32px] font-bold pt-16 w-full">
            OUR HAPPY CUSTOMERS
          </div>
        </div>
        <div className="relative overflow-hidden flex flex-row items-center justify-center w-full">
          <div className="relative w-[90%] max-w-[800px] bg-[#f0eeed] rounded-[83.5px_0px]">
            {/* <div className="absolute w-[32px] h-[32px] bg-[var(--b400-default)] rounded-full z-[999] top-[40%] left-[-12px] cursor-pointer flex items-center justify-center">
              {leftarrow}
            </div>
            <div className="absolute w-[32px] h-[32px] bg-[var(--b400-default)] rounded-full z-[999] top-[40%] right-[-12px] cursor-pointer flex items-center justify-center rotate-180">
              {rightarrow}
            </div> */}
            <div className="relative block box-border select-none touch-pan-y">
              <TestimonialSlider />
            </div>
          </div>
        </div>
      </div>

      {/* new line */}
      <div className="bg-[#f0f0f0] md:mt-[170px] mt-[185px] relative pb-[50px] flex flex-row items-start justify-center w-full">
        <div className="max-w-[1240px] absolute md:-top-[90px] -top-[135px] w-[90%] flex flex-col items-center justify-center">
          <div className="rounded-[20px] bg-black md:px-[54px] px-6 md:py-[36px] py-[32px] flex md:flex-row flex-col items-center justify-between w-full md:gap-0 gap-[32px]">
            <div className="flex flex-row items-start justify-start text-white md:text-[40px] text-[32px] font-bold md:leading-[45px] leading-[35px] max-w-[550px]">
              STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </div>
            <div className="flex flex-col items-start justify-start md:gap-3.5 gap-3 md:w-auto w-full">
              <div className="flex flex-row items-center justify-start gap-3 rounded-[62px] bg-white px-4 py-3 md:w-auto w-full">
                {mailicon}
                <input
                  className="border-none text-black/40 placeholder:text-[#00000066] font-satoshi md:text-base text-sm font-normal py-[1px] px-0.5 leading-[1.375]"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="flex flex-row items-center justify-center w-full px-4 py-3 rounded-[62px] bg-white text-black md:text-base text-sm font-medium leading-[1.375] font-satoshi text-center cursor-pointer">
                Send Us For Notification
              </div>
            </div>
          </div>
        </div>
        <div className="md:mt-[140px] mt-[190px] max-w-[1240px] w-[90%] flex md:flex-row flex-col items-center justify-around md:gap-0 gap-[25px]">
          <div className="flex flex-col items-start justify-start gap-[25px] md:w-auto w-full">
            <div className="text-black font-integralCF text-[33.455px] font-bold leading-[1.196]">
              SHOP.CO
            </div>
            <div className="flex flex-row items-start justify-start text-black/60 font-satoshi text-sm font-normal leading-[22px] max-w-[250px]">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </div>
            <div className="mt-2.5 flex flex-row items-start justify-start gap-2.5">
              {facebookicon}
              {instaicon}
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-2.5 font-satoshi md:w-auto w-full">
            <p className="block my-[1em] mx-0 text-black font-satoshi text-[16px] font-medium leading-[18px] tracking-[3px] uppercase">
              HELP
            </p>
            <a href="#" className="font-satoshi leading-[1.375]">Privacy statement</a>
            <a href="#" className="font-satoshi leading-[1.375]">Terms & Conditions</a>
            <a href="#" className="font-satoshi leading-[1.375]">Cookie Policy</a>
          </div>
        </div>
      </div>
    </>
  );
}

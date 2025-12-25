import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { leftarrow, rightarrow } from "@/assets/icon/icon";

const NextArrow = ({ onClick }) => {
  return (
    <div
      className="slick-next mt-2.5 absolute size-[32px]! bg-[#0050c7]! rounded-full z-50 -right-3! -translate-y-1/2! -translate-x-none! cursor-pointer flex! items-center justify-center *:rotate-180 before:hidden [&>svg>g]:opacity-100 [&>svg>g>path]:fill-white"
      onClick={onClick}
    >
      {rightarrow}
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="slick-prev mt-2.5 absolute size-[32px]! bg-[#0050c7]! rounded-full z-50 -left-3! -translate-y-1/2! -translate-x-none! cursor-pointer flex! items-center justify-center before:hidden [&>svg>g]:opacity-100 [&>svg>g>path]:fill-white"
      onClick={onClick}
    >
      {leftarrow}
    </div>
  );
};

const TestimonialSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  return (
    <div className="relative">
      <div className="max-w-[#f0eeed] mx-auto rounded-tr-[83.5px] rounded-bl-[83.5px]">
        <Slider {...settings}>
          {[...Array(10)].map((_, index) => (
            <div key={index}>
              <div className="p-6 space-y-3">
                <p className="text-base font-medium text-[#14141f] leading-6 text-center font-satoshi">
                  Our experience with your service has been exceptional. The
                  platform provided us with a seamless hiring process, from
                  posting job openings to finding the perfect candidate. The
                  user-friendly interface made it easy for our team to
                  collaborate, review applications, and schedule interviews.
                  Thanks to your service, we were able to hire a highly
                  qualified candidate within a short timeframe. It has become an
                  invaluable tool for our recruitment efforts
                </p>
                <div className="space-y-1">
                  <p className="text-base font-bold text-center text-[#14141f] leading-6 font-satoshi">
                    John Smith
                  </p>
                  <p className="text-sm text-center text-[#66707d] leading-5 font-satoshi">
                    Senior HR Manager at Zendesk
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialSlider;

import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/navigation";
import "swiper/css/autoplay";
export default function WorksSection({
  uxiProjects, frEnProjects
}: {
  uxiProjects: {
    title: string;
    image: string;
    description: string;
    link: string;
  }[];
  frEnProjects: {
    title: string;
    image: string;
    description: string;
    link: string;
  }[];
}) 
{
  return (
    <section id="works" className="mx-16 px-16 mt-12 items-center">
      <h2 className="text-6xl text-center">My Works</h2>
      <div className="grid grid-cols-1 mt-6 items-center md:grid-cols-2 lg:grid-cols-2 gap-30">
        <div className="place-items-center">
          <p className="text-2xl text-[#B3B3B3]">UX/UI Design</p>
          <div className="mt-4 w-[600px] min-h-screen items-center pt-3">
            <Swiper
              speed={1500} // 1.5 seconds for each slide transition
              modules={[EffectCube, Navigation, Autoplay]}
              effect="cube"
              navigation
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
              }}
              className="mySwiper h-96"
            >
              {uxiProjects.map(({ title, image, description, link }, index) => (
                <SwiperSlide className=" w-[600px] h-[600px] flex items-center text-white ">
                  
                    <div className="flex flex-col items-center">
                      <Link key={index} to={link}>
                      <img src={image} className=" w-96 h-80 " alt="" /> 
                      </Link>
                      <div className="flex flex-col w-96 pl-0 pt-2">
                        <p className="text-2xl text-[#4AFF6B] font-bold text-start">
                          {title}
                        </p>
                        <p className="text-sm text-[#B3B3B3] mt-4">
                          {description}
                        </p>
                      </div>
                      <div className="flex flex-row justify-between w-96 pt-4 ">
                        <Link key={index} to={link} className="">
                        <button className="hidden bg-[#133737] w-16 rounded-full py-1 font-medium text-sm hover:bg-[#133737] border-1 border-[#4AFF6B] hover:text-white hover:cursor-pointer transition-colors text-white ">
                          Details
                        </button>
                        </Link>
                        <Link key={index} to={link}>
                        <button className="bg-[#133737] w-16 rounded-full font-medium text-sm hover:bg-[#133737] border-1 border-[#4AFF6B] hover:text-white hover:cursor-pointer transition-colors text-white py-1 ">
                          Details
                        </button>
                        </Link>
                      </div>
                    </div>
                 
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="place-items-center">
          <p className="text-2xl text-[#B3B3B3]">Front-End Development</p>
          <div className="mt-4 w-[600px] min-h-screen items-center pt-3">
            <Swiper
              speed={1500} // 1.5 seconds for each slide transition
              modules={[EffectCube, Navigation, Autoplay]}
              effect="cube"
              navigation
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
              }}
              className="mySwiper h-96"
            >
              {frEnProjects.map(({ title, image, description, link }, index) => (
                <SwiperSlide className=" w-[600px] h-[600px] flex items-center text-white ">
                  
                    <div className="flex flex-col items-center">
                      <Link key={index} to={link}>
                      <img src={image} className=" w-96 h-80 " alt="" /> 
                      </Link>
                      <div className="flex flex-col w-96 pl-0 pt-2">
                        <p className="text-2xl text-[#4AFF6B] font-bold text-start">
                          {title}
                        </p>
                        <p className="text-sm text-[#B3B3B3] mt-4">
                          {description}
                        </p>
                      </div>
                      <div className="flex flex-row justify-between w-96 pt-4 ">
                        <Link key={index} to={link}>
                        <button className="bg-[#133737] w-16 rounded-full py-1 font-medium text-sm hover:bg-[#133737] border-1 border-[#4AFF6B] hover:text-white hover:cursor-pointer transition-colors text-white ">
                          Details
                        </button>
                        </Link>
                        <Link key={index} to={link}>
                        <button className="bg-[#133737] w-16 rounded-full font-medium text-sm hover:bg-[#133737] border-1 border-[#4AFF6B] hover:text-white hover:cursor-pointer transition-colors text-white py-1 ">
                          Code
                        </button>
                        </Link>
                      </div>
                    </div>
                 
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

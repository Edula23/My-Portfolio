import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { motion } from "framer-motion";
export default function WorksSection({
  uxiProjects,
  frEnProjects,
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
}) {
  return (
    <motion.div
    initial={{opacity:0, y:80}}
    whileInView={{opacity:1, y:0}}
    transition={{duration:2, ease:"easeOut"}}
    viewport={{once:true}}
    >
    <section id="works" className="md:mx-16 md:px-16 md:mt-12 items-center">
      <h2 className="text-6xl text-start md:text-center">My Works</h2>
      <div className="grid grid-cols-1 mt-6 items-center md:grid-cols-2 lg:grid-cols-2 gap-30">
        <div className="md:place-items-center">
          <p className="text-2xl text-[#B3B3B3]">UX/UI Design</p>
          <div className="hidden md:block md:mt-4 md:w-[600px] md:min-h-screen items-center md:pt-3">
            <Swiper
              slidesPerView={1}
              speed={1000} // 1.5 seconds for each slide transition
              modules={[EffectCube, Navigation, Autoplay]}
              effect="cube"
              navigation
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              spaceBetween={30}
              cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
              }}
              className="mySwiper h-96"
            >
              {uxiProjects.map(({ title, image, description, link }, index) => (
                <SwiperSlide className="w-400px h-400px ml-[-4] mt-4 md:w-[600px] md:h-[600px] flex items-center text-white ">
                  <div className="flex flex-col items-center">
                    <Link key={index} to={link}>
                      <img
                        src={image}
                        className="w-70 h-58 md:w-96 md:h-80 "
                        alt=""
                      />
                    </Link>
                    <div className="flex flex-col w-70 md:w-96 md:pl-0 md:pt-2">
                      <p className="text-2xl text-[#4AFF6B] font-bold text-start">
                        {title}
                      </p>
                      <p className="text-sm text-[#B3B3B3] mt-4">
                        {description}
                      </p>
                    </div>
                    <Link
                      key={index}
                      to={link}
                      className="ml-auto pr-4 md:pr-28 pt-4"
                    >
                      <button className=" ml-auto bg-[#133737] w-16 rounded-full font-medium text-sm hover:bg-[#133737] border-1 border-[#4AFF6B] hover:text-white hover:cursor-pointer transition-colors text-white py-1 ">
                        Details
                      </button>
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="md:hidden [&_div]:mt-4 ">
            {uxiProjects.map(({ title, image, description, link }, index) => (
              <div className="flex flex-col items-start ">
                <Link key={index} to={link}>
                  <img
                    src={image}
                    className="w-80 h-70 "
                    alt=""
                  />
                </Link>
                <div className="flex flex-col w-70 md:w-96 md:pl-0 md:pt-2">
                  <p className="text-2xl text-[#4AFF6B] font-bold text-start">
                    {title}
                  </p>
                  <p className="text-sm text-[#B3B3B3] mt-4">{description}</p>
                </div>
                <Link
                  key={index}
                  to={link}
                  className="ml-auto pr-4 md:pr-28 pt-4"
                >
                  <button className=" bg-[#133737] w-16 rounded-full font-medium text-sm hover:bg-[#133737] border-1 border-[#4AFF6B] hover:text-white hover:cursor-pointer transition-colors text-white py-1 ">
                    Details
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="md:place-items-center">
          <p className="text-2xl text-[#B3B3B3]">Front-End Development</p>
          <div className="hidden md:block mx-2 md:mt-4 md:w-[600px] md:min-h-screen items-center md:pt-3">
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
              {frEnProjects.map(
                ({ title, image, description, link }, index) => (
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
                )
              )}
            </Swiper>
          </div>
          <div className="md:hidden [&_div]:mt-4">
            {frEnProjects.map(({ title, image, description, link }, index) => (
              <div className="flex flex-col items-start">
                <Link key={index} to={link}>
                  <img src={image} className="w-80 h-70 " alt="" />
                </Link>
                <div className="flex flex-col w-70 md:w-96 md:pl-0 md:pt-2">
                  <p className="text-2xl text-[#4AFF6B] font-bold text-start">
                    {title}
                  </p>
                  <p className="text-sm text-[#B3B3B3] mt-4">{description}</p>
                </div>
                <div className="flex flex-row justify-between w-80 pt-4 ">
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
            ))}
          </div>
        </div>
      </div>
    </section>
    </motion.div>
  );
}

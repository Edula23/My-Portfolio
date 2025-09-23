import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
export default function WorksSection({
  projects,
}: {
  projects: {
    title: string;
    image: string;
    description: string;
    link: string;
  }[];
}) {
  return (
    <section id="works" className="mx-16 px-16 mt-12 items-center">
      <h2 className="text-6xl text-center">My Works</h2>
      <div className="grid grid-cols-1 mt-12 items-center md:grid-cols-2 lg:grid-cols-2 gap-30">
        <div className="place-items-center">
          <p className="text-2xl text-[#B3B3B3]">UX/UI</p>
          <div className="mt-4 w-[600px] min-h-screen items-center">
            <Swiper
              speed={1500} // 1.5 seconds for each slide transition
              modules={[EffectCube, Navigation, Pagination, Autoplay]}
              effect="cube"
              navigation
              pagination={{ clickable: true }}
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
              {projects.map(({ title, image, description, link }, index) => (
                <SwiperSlide className=" w-[600px] h-[600px] flex items-center text-white ">
                  <Link key={index} to={link}>
                    <div className="flex flex-col items-center">
                      <img src={image} className=" w-96 h-96 " alt="" />
                      <div className="flex flex-col w-96 pl-6">
                        <p className="text-2xl text-[#4AFF6B] font-bold text-center">
                          {title}
                        </p>
                        <p className="text-sm text-[#B3B3B3] mt-4">
                          {description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="place-items-center">
          <p className="text-2xl text-[#B3B3B3]">UX/UI</p>
          <div className="mt-4 w-[800px] min-h-screen items-center">
            <Swiper
              speed={1500} // 1.5 seconds for each slide transition
              modules={[EffectCube, Navigation, Pagination, Autoplay]}
              effect="cube"
              navigation
              pagination={{ clickable: true }}
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
              {projects.map(({ title, image, description, link }, index) => (
                <SwiperSlide className=" w-[600px] h-[600px] flex items-center text-white ">
                  <Link key={index} to={link}>
                    <div className="flex flex-col items-center">
                      <img src={image} className=" w-96 h-96 " alt="" />
                      <div className="flex flex-col w-96 pl-6">
                        <p className="text-2xl text-[#4AFF6B] font-bold text-center">
                          {title}
                        </p>
                        <p className="text-sm text-[#B3B3B3] mt-4">
                          {description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import travelHabesha from "../assets/travelHabesha.png";
import campusGebeta from "../assets/CampusGebeta.png";
import alikoContech from "../assets/alikoCon-Tech.png";
export default function WorksSection() {
  return (
    <section id="works" className="mx-16 px-16 mt-12 items-center">
      <h2 className="text-6xl text-center">My Works</h2>
      <div className="grid grid-cols-1 mt-12 items-center md:grid-cols-2 lg:grid-cols-2 gap-30">
      <div className="place-items-center">      
      <p className="text-2xl text-[#B3B3B3]">
       UX/UI
      </p>
      <div className="mt-4 w-[600px] min-h-screen items-center">      
      <Swiper
        speed={1500} // 1.5 seconds for each slide transition
        modules={[EffectCube, Navigation, Pagination, Autoplay]}
        effect="cube"
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop = {true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        className="mySwiper h-96"
      >
        <SwiperSlide className=" w-[600px] h-[600px] flex items-center text-white ">
          <div className="flex flex-col items-center ">
          <img src={travelHabesha} className=" w-96 h-96 " alt="" />
          <div className="flex flex-col w-96 pl-6">
            <p className="text-2xl text-[#4AFF6B] font-bold text-center">Travel Habesha</p>
          <span className="w-fit text-xs text-white font-bold text-center px-2 py-1 border border-[#4AFF6B] rounded-full border-[0.5px]">Figma</span>
          <p className="text-sm text-[#B3B3B3] mt-4">This travel website design blends modern UI/UX principles with cultural flair, offering users a seamless journey from exploration to booking. </p>
          </div>      
          
          </div>
        </SwiperSlide>
        <SwiperSlide className=" w-[600px] h-[600px] flex items-center text-white ">
          <div className="flex flex-col items-center">
          <img src={campusGebeta} className=" w-96 h-96" alt="" />
          <p>Campus Gebeta</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" w-[600px] h-[600px] flex items-center text-white ">
          <div className="flex flex-col items-center">
          <img src={alikoContech} className=" w-96 h-96" alt="" />
          <p>Aliko Con-Tech</p>
          </div>
        </SwiperSlide>
        {/* Add more SwiperSlide components as needed */}
      </Swiper>
      </div>
      </div>
      <div className="place-items-center">      
      <p className="text-2xl text-[#B3B3B3]">
       UX/UI
      </p>
      <div className="mt-4 w-[800px] min-h-screen items-center">      
      <Swiper
        speed={1500} // 1.5 seconds for each slide transition
        modules={[EffectCube, Navigation, Pagination, Autoplay]}
        effect="cube"
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop = {true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        className="mySwiper h-96"
      >
        <SwiperSlide className=" w-[600px] h-[600px] flex items-center text-white ">
          <div className="flex flex-col items-center ">
          <img src={travelHabesha} className=" w-96 h-96 " alt="" />
          <div className="flex flex-col w-96 pl-6">
            <p>Travel Habesha</p>
          <span>Figma</span>
          <p >This travel website design blends modern UI/UX principles with cultural flair, offering users a seamless journey from exploration to booking. </p>
          </div>      
          
          </div>
        </SwiperSlide>
        <SwiperSlide className=" w-[600px] h-[600px] flex items-center text-white ">
          <div className="flex flex-col items-center">
          <img src={campusGebeta} className=" w-96 h-96" alt="" />
          <p>Campus Gebeta</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" w-[600px] h-[600px] flex items-center text-white ">
          <div className="flex flex-col items-center">
          <img src={alikoContech} className=" w-96 h-96" alt="" />
          <p>Aliko Con-Tech</p>
          </div>
        </SwiperSlide>
        {/* Add more SwiperSlide components as needed */}
      </Swiper>
      </div>
      </div>
      </div>
    </section>
  );
}

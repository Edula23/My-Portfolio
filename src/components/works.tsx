import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import travelHabesha from "../assets/travelHabesha.png";
import campusGebeta from "../assets/campusGebeta.png";
import alikoContech from "../assets/alikoCon-Tech.png";
export default function WorksSection() {
  return (
    <section className="mx-16 mt-12 items-center">
      <h2 className="text-6xl text-center">My Works</h2>
      <div className="grid grid-cols-1 mt-12 items-center md:grid-cols-2 lg:grid-cols-2 gap-auto">
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
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        className="mySwiper h-[400px]"
      >
        <SwiperSlide className=" w-[800px] h-[800px] flex items-start text-white ">
          <div className="flex flex-row">
          <img src={travelHabesha} className=" w-[400px] h-[400px]" alt="" />
          <p>Travel Habesha</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" w-[800px] h-[800px] flex items-start text-white ">
          <div className="flex flex-row">
          <img src={campusGebeta} className=" w-[400px] h-[400px]" alt="" />
          <p>Campus Gebeta</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" w-[800px] h-[800px] flex items-start text-white ">
          <div className="flex flex-row">
          <img src={alikoContech} className=" w-[400px] h-[400px]" alt="" />
          <p>Aliko Con-Tech</p>
          </div>
        </SwiperSlide>
        {/* Add more SwiperSlide components as needed */}
      </Swiper>
      </div>
      </div>
      {/* <div className="place-items-center">
      <p className="text-2xl text-[#B3B3B3]">
       Front-End
      </p>
      <div className="mt-4 min-h-screen items-center">
      <Swiper
        speed={1500} // 1.5 seconds for each slide transition
        modules={[EffectCube, Navigation, Pagination, Autoplay]}
        effect="cube"
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        className="mySwiper"
      >
        <SwiperSlide className="flex flex-row items-start text-white">
          <img src={travelHabesha} className="w-[400px] h-[400px] " alt="" />
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium nobis suscipit eius quibusdam molestias qui corrupti cupiditate, mollitia iure illum. Minima voluptatibus in eligendi doloremque perspiciatis animi eveniet vero voluptates.
        </p>
        </SwiperSlide>
        <SwiperSlide className=" w-[400px] h-[400px] flex items-start justify-center text-white text-2xl">
          <img src={campusGebeta} className=" w-[400px] h-[400px]" alt="" />
        </SwiperSlide>
        <SwiperSlide className="bg-amber-500 w-[400px] h-[400px] flex items-start justify-center text-white text-2xl">
          <img src={alikoContech} className=" w-[400px] h-[400px]" alt="" />
        </SwiperSlide>
        {/* Add more SwiperSlide components as needed */}
      {/*</div></Swiper>*/}
      {/* </div>
      </div> */} 
      </div>
    </section>
  );
}

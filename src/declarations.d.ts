declare module 'swiper/css';
declare module 'swiper/css/effect-cube';
declare module 'swiper/css/navigation';
declare module 'swiper/css/pagination';
declare module 'swiper/css/autoplay';
declare module "react-router-hash-link" {
  import { ComponentType } from "react";
  // minimal safe typing
  export const HashLink: ComponentType<Record<string, unknown>>;
  export default HashLink;
}
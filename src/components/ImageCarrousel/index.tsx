import React from "react";
import { SwiperProps, SwiperSlide } from "swiper/react";
import Slider from "../Slider/Slider";

export default function ({ children }: React.PropsWithChildren) {
  const settings: SwiperProps = {
    slidesPerView: 1,
    autoplay: {
      delay: 5000, // 5 seconds
      disableOnInteraction: false,
    },
    loop: true,
    navigation: true,
    pagination: {
      clickable: true,
    },
  };

  return <Slider settings={settings}>{children}</Slider>;
}

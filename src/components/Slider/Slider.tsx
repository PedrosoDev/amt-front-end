import { Autoplay, Navigation, Pagination, A11y } from "swiper";
import { SwiperProps, Swiper, SwiperSlide } from "swiper/react";
import React, { Children } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Slider.css";

interface Props {
  settings: SwiperProps;
}

export default function ({
  settings,
  children,
}: React.PropsWithChildren<Props>) {
  return (
    <div>
      <Swiper modules={[Autoplay, Navigation, Pagination, A11y]} {...settings}>
        {children}
      </Swiper>
    </div>
  );
}

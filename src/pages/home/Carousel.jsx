// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

// import slider images
import slider_img_1 from "../../assets/slider/slider-img-1.png"
import slider_img_2 from "../../assets/slider/slider-img-2.png"
import slider_img_3 from "../../assets/slider/slider-img-3.jpeg"
import slider_img_4 from "../../assets/slider/slider-img-4.jpg"
import slider_img_5 from "../../assets/slider/slider-img-5.jpg"

const Carousel = () => {
  return (
    <div className='h-[520px]'>
      <Swiper
        direction={'vertical'}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slider_img_3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_img_4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_img_5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_img_1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_img_2} alt="" />
        </SwiperSlide>      
      </Swiper>
    </div>
  );
};

export default Carousel;
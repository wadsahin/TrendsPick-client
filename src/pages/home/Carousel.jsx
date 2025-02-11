// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

// Dynamic sliders
import Slider from './Slider';
import slider_img_1 from "../../assets/slider/search.png"
import slider_img_2 from "../../assets/slider/yes-no.png"
import slider_img_3 from "../../assets/slider/usability.png"
import slider_img_4 from "../../assets/slider/onboarrding.png"

const Carousel = () => {
  return (
    <div style={{ height: "72vh" }}>
      <Swiper
        direction={'vertical'}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slider
            img={slider_img_4}
            title="Welcome to our Query services & support platform"
            desc="You will find out all of your queries, answers, ideas, and Suggestions in our TrendPicks Platform. You should explore now."
          />
        </SwiperSlide>

        <SwiperSlide>
          <Slider
            img={slider_img_1}
            title="Where and how to know better about the product? "
            desc="You will find out all of your queries, answers, ideas, and Suggestions in our TrendPicks Platform. You should explore now."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slider
            img={slider_img_2}
            title="Will this be good for me? and Does anyone have any Idea? "
            desc="You will find out all of your queries, answers, ideas, and Suggestions in our TrendPicks Platform. You should explore now."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slider
            img={slider_img_3}
            title="If you have any doubts or interest in clarification you can just drop a post. "
            desc="You will find out all of your queries, answers, ideas, and Suggestions in our TrendPicks Platform. You should explore now."
          />
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Carousel;
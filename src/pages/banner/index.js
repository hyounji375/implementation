import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import cat from "../../img/cat.jpg";
import { Text } from "./style";
import "swiper/css/autoplay";

const Banner = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <div>
        <SwiperSlide>
          <img src={cat} alt="cat" />
          <Text>고양이1</Text>
        </SwiperSlide>
        <SwiperSlide>
          <img src={cat} alt="cat" />
          <Text>고양이2</Text>
        </SwiperSlide>
        <SwiperSlide>
          <img src={cat} alt="cat" />
          <Text>고양이3</Text>
        </SwiperSlide>
        <SwiperSlide>
          <img src={cat} alt="cat" />
          <Text>고양이4</Text>
        </SwiperSlide>
      </div>
    </Swiper>
  );
};
export default Banner;

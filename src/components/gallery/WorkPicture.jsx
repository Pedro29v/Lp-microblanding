import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
import pic1 from "../../assets/pic1.jfif";
import pic2 from "../../assets/pic2.jfif";
import pic3 from "../../assets/pic3.jfif";
import pic4 from "../../assets/pic4.jfif";
import pic5 from "../../assets/pic5.jfif";
import pic6 from "../../assets/pic6.jfif";

function WorkPicture() {
  const images = [
    {
      src: `${pic1}`,
      alt: "picture",
    },
    {
      src: `${pic2}`,
      alt: "picture",
    },
    {
      src: `${pic3}`,
      alt: "picture",
    },
    {
      src: `${pic4}`,
      alt: "picture",
    },
    {
      src: `${pic5}`,
      alt: "picture",
    },
    {
      src: `${pic6}`,
      alt: "picture",
    },
  ];

  return (
    <div className="w-[60%] h-[30rem] mt-[6rem] md:w-[40%] md:h-[auto] m-auto md:mt-[10rem]  ">
      <div
        className="w-[100%] p-4 
      text-center text-[1.4em]  text-pink-500 mb-10 md:mb-[6rem] md:text-[2.5em] "
      >
        <h2>Galeria</h2>
      </div>

      <Swiper modules={[EffectCards]} effect="cards">
        {images.map((e, i) => (
          <SwiperSlide key={i}>
            <img src={e.src} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default WorkPicture;

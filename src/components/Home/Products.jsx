import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay, Virtual } from "swiper/core";
import "swiper/swiper-bundle.css";
import mds from "../../assets/img/mds.png";
import jnbw from "../../assets/img/jnbw.png";
import d from "../../assets/img/d.png";
import p from "../../assets/img/p.png";
import a from "../../assets/img/a.png";

SwiperCore.use([Navigation, Autoplay, Virtual]);

export default function Products() {
  const slides = [
    {
      picture: mds,
      title: "MDS | Зрелая красота",
      price: "4250₽",
      details: "https://visionforlife.net/mds",
    },
    {
      picture: jnbw,
      title: "JN Smart To Wise | Ум и концентрация",
      price: "2900₽",
      details: "https://visionforlife.net/jn-smart-to-wise",
    },
    {
      picture: p,
      title: "Нутрицевтик P | баланс нервной системы",
      price: "2750₽",
      details: "https://visionforlife.net/p-projectv",
    },
    {
      picture: d,
      title: "Нутрицевтик D | детоксикация организма",
      price: "2750₽",
      details: "https://visionforlife.net/d-projectv",
    },
    {
      picture: a,
      title: "Нутрицевтик A | сила антиоксандантов",
      price: "2750₽",
      details: "https://visionforlife.net/a-projectv",
    },
  ];

  return (
    <section className="Products">
      <div className="Container__inner">
        <h2>Другие продукты</h2>
        <p className="Products__desc">
          Сегодня Project V предлагает новые продукты для красоты и здоровья.
          Вся продукция выпускается во Франции и Швейцарии из растительного
          сырья премиум-качества и сертифицирована по стандарту GMP.
        </p>
        <a
          href="https://visionforlife.net/project-v/"
          target="_blank"
          className="Products__more"
        >
          <p>Смотреть все</p>

          <svg
            width="44"
            height="6"
            viewBox="0 0 44 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M44 3L39 0.113249V5.88675L44 3ZM0 3.5H39.5V2.5H0V3.5Z"
              fill="#231F20"
            />
          </svg>
        </a>
        <Swiper
          id="swiper"
          virtual
          breakpoints={{
            // when window width is >= 1023
            1023: {
              slidesPerView: 4,
              spaceBetween: 40
            },

            768: {
              slidesPerView: 2.15,
              spaceBetween: 40
            },
            // when window width is >= 768px

            320: {
              slidesPerView: 2,
              spaceBetween: 16
            },
          }}
          onReachEnd={() => {
            console.log("reach end");
            const tmp = slides.unshift();
            slides.push(tmp);
          }}
          navigation
        >
          <div>
            {slides.map((item, i) => (
              <SwiperSlide key={`slide-${i}`} className="Products__item">
                <a href={item.details} target="_blank" className="slide">
                  <img src={item.picture} alt="" />
                  <h4>{item.title}</h4>
                  <div className="slide__info">
                    <p>{item.price}</p>
                    <span>
                      Подробнее
                    </span>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </section>
  );
}

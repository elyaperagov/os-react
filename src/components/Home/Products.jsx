import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay, Virtual } from "swiper/core";
import "swiper/swiper-bundle.css";
import mds from "../../assets/img/mds.png";
import jnb from "../../assets/img/jnb.png";
import d from "../../assets/img/d.png";
import p from "../../assets/img/p.png";
import a from "../../assets/img/a.png";

SwiperCore.use([Navigation, Autoplay, Virtual]);

export default function Products() {
  const slides = [
    {
      picture: mds,
      title: "MDS | Зрелая красота",
      price: "5400₽",
      details: "https://badprojectv.ru/mds-projectv",
    },
    {
      picture: jnb,
      title: "JNB| Королевская осанка",
      price: "3800₽",
      details: "https://badprojectv.ru/jnb-projectv",
    },
    {
      picture: p,
      title: "Нутрицевтик P | баланс нервной системы",
      price: "3300₽",
      details: "https://badprojectv.ru/p-projectv",
    },
    {
      picture: d,
      title: "Нутрицевтик D | детоксикация организма",
      price: "3300₽",
      details: "https://badprojectv.ru/d-projectv",
    },
    {
      picture: a,
      title: "Нутрицевтик A | сила антиоксандантов",
      price: "3300₽",
      details: "https://badprojectv.ru/a-projectv",
    },
  ];

  return (
    <section className="Products" id="products">
      <div className="Container__inner">
        <h2>Другие продукты</h2>
        <p className="Products__desc">
          Сегодня Project V предлагает новые продукты для красоты и здоровья.
          Вся продукция выпускается во Франции и Швейцарии из растительного
          сырья премиум-качества и сертифицирована по стандарту GMP.
        </p>
        <a
          href="https://badprojectv.ru/"
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
            <path d="M44 3L39 0.113249V5.88675L44 3ZM0 3.5H39.5V2.5H0V3.5Z" />
          </svg>
        </a>
        <Swiper
          id="swiper"
          virtual
          breakpoints={{
            // when window width is >= 1023
            1023: {
              slidesPerView: 4,
              spaceBetween: 40,
            },

            768: {
              slidesPerView: 2.15,
              spaceBetween: 40,
            },
            // when window width is >= 768px

            320: {
              slidesPerView: 2,
              spaceBetween: 16,
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
                      <svg
                        width="25"
                        height="8"
                        viewBox="0 0 25 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M24.3536 4.35355C24.5488 4.15829 24.5488 3.84171 24.3536 3.64645L21.1716 0.464466C20.9763 0.269204 20.6597 0.269204 20.4645 0.464466C20.2692 0.659728 20.2692 0.976311 20.4645 1.17157L23.2929 4L20.4645 6.82843C20.2692 7.02369 20.2692 7.34027 20.4645 7.53553C20.6597 7.7308 20.9763 7.7308 21.1716 7.53553L24.3536 4.35355ZM0 4.5H24V3.5H0V4.5Z"
                          fill="#1C355E"
                        />
                      </svg>
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

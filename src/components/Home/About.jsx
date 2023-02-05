import React from "react";
import Manufacturing from "../../assets/img/close-up-hands-holding-petri-dish.jpg";
import AboutPicture from "../../assets/img/about.jpg";

const About = (props) => {
  return (
    <section className="About">
      <div className="Container">
        <h2>О компании</h2>
        <div className="About__desc">
          Мы инвестировали деньги во французскую компанию{" "}
          <b>Vision International People Group</b>, основанную в 1996 году. За
          годы работы компания Vision она стала лидером по производству БАДов и
          косметики не только на французском, но и на европейском рынке — ее
          продукция ценится во всем мире. Сейчас бренд <b>Project V</b>,
          являющийся единственным юридическим правопреемником компании Vision,
          отражает идею создателей Vision — предоставлять лучшие продукты для
          укрепления здоровья и улучшать качество жизни. Для их производства
          используются только новейшие технологии, позволяющие сохранять
          все полезные свойства компонентов, входящих в состав.
        </div>
        <img className="About__picture" src={Manufacturing} alt="" />
        <div className="About__manufacturer">
          Главный стратегический партнер Project V - фармацевтический концерн
          Trading Point Groupe Elite Pharm. Помимо головного офиса,
          расположенного в Страсбурге, у Trading Point есть 3 производственных
          площадки: для cухих форм — 4000 м2; для жидких форм — 3500 м2; для
          косметической продукции — 2300 м2.
        </div>
        <div className="About__manufacturer-bold">
          Trading Point на рынке уже 23 года. но почти сразу после своего
          основания благодаря новейшим технологиям вошла в топ-10
          фармопроизодителей Франции.
        </div>
        <div className="About__info">
          <div className="About__info-picture">
            <img src={AboutPicture} alt="" />
          </div>

          <p>
            Trading Point не просто компания «с полным циклом разработки
            продукции». Формулы создают лучшие ученые мира, а лучшие специалисты
            занимаются производством, контролем качества и даже логистикой.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

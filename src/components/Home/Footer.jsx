import React from "react";
import logo from "../../assets/img/logo.svg";
import tg from "../../assets/img/tg.svg";
import vk from "../../assets/img/vk.svg";
import whatsapp from "../../assets/img/whatsapp.svg";
import inst from "../../assets/img/inst.svg";

const Footer = () => {
  return (
    <section className="Footer">
      <div className="Footer__wrapper">
        <div className="Container">
          <div className="Footer__inner">
            <a href="/" className="Footer__logo">
              <img src={logo} alt="" />
            </a>
            <p>© 2023 Оздоровительная продукция Vision/Project V</p>
            <a href="tel:+79212377815">+7-921-237-78-15</a>
            <div className="Footer__socials">
              <div className="Footer__social">
                <a href="https://t.me/pirogovala">
                  <img src={tg} alt="" />
                </a>
              </div>
              <div className="Footer__social">
                <a href="https://vk.com/club195235991" target="_blank">
                  <img src={vk} alt="" />
                </a>
              </div>
              <div className="Footer__social">
                <a href="https://wa.me/79212377815">
                  <img src={whatsapp} alt="" />
                </a>
              </div>
              <div className="Footer__social">
                <a href="https://www.instagram.com/pirogovala">
                  <img src={inst} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

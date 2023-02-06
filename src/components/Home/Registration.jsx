import React, { useState } from "react";
import RoundButton from "../UI/RoundButton";
import bubbleFour from "../../assets/img/bubble-four.svg";
import bubbleThree from "../../assets/img/bubble-three.svg";

const Registration = () => {
  return (
    <div className="Registration">
      <div className="Registration__wrapper">
        <div className="Container">
          <div className="Registration__inner">
            <img
              className="Registration__bubble-two"
              width="500"
              src={bubbleThree}
              alt=""
            />
            <img className="Registration__bubble-one" src={bubbleFour} alt="" />
            <div className="Registration__content">
              <h2>
                Пройдите <b>регистрацию</b>
                <p>для покупки со скидкой</p>
              </h2>
            </div>
            <div className="Registration__wrap">
              <p className="Registration__text">
                Пройдите регистрацию в приложении Sessia и покупайте весь
                ассортимент Vision/Project V со скидкой до 40%!
              </p>

              <a
                href="https://web.sessia.com/?guarantor=ECV-518470"
                target="_blank"
                className="Button Button--round"
              >
                <p>Купить со скидкой</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;

import React, { useState } from "react";

const ModalSuccess = ({ setIsSuccessOpen }) => {
  return (
    <div className="Modal">
      <div className="Modal__bg" onClick={() => setIsSuccessOpen(false)} />
      <div className="Modal__wrapper">
      <div className="Modal__container Modal__container--success">
      <button className="Modal__close" onClick={() => setIsSuccessOpen(false)} >
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="1.29289"
              y1="15.435"
              x2="15.435"
              y2="1.29285"
              stroke="white"
            />
            <line
              x1="1.70711"
              y1="1.29289"
              x2="15.8492"
              y2="15.435"
              stroke="white"
            />
          </svg>
        </button>
        <div className="Modal__success">
          <p className="Modal__heading">Ваш заказ успешно оформлен</p>
          <p className="Modal__text">
            {" "}
            Наш менеджер свяжется с вами в течение часа для подтверждения
            заказа.
          </p>
        </div>
      </div>
      </div>

    </div>
  );
};

export default ModalSuccess;

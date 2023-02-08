import React, { useState } from "react";

const ModalSuccess = ({ closeSuccess }) => {
  return (
    <div className="Modal">
      <div className="Modal__bg" onClick={() => closeSuccess()} />
      <div className="Modal__container">
        <div className="Modal__success">
          <p className="Modal__success-heading">Ваш заказ успешно оформлен</p>
          <p className="Modal__success-text">
            {" "}
            Наш менеджер свяжется с вами в течение часа для подтверждения
            заказа.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModalSuccess;

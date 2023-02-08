import React, { useState } from "react";
import { sendMail } from "../../api";
import os from "../../assets/img/os.png";
import PhoneInput from "./PhoneInput";

const Modal = (props) => {
  const nameRef = React.useRef();
  const emailRef = React.useRef();
  const textRef = React.useRef();
  const phoneRef = React.useRef();

  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(3250);

  function plus() {
    setCount(count + 1);
    setPrice(price + 3250);
  }

  function minus() {
    setCount(count - 1);
    setPrice(price - 3250);

    if (count <= 0 || price <= 3250) {
      setCount(1);
      setPrice(3250);
    }
  }

  const [phone, setPhone] = useState("");
  const handleInput = ({ target: { value } }) => setPhone(value);

  return (
    <div className="Modal">
      <div className="Modal__bg" onClick={() => props.setIsOpen(false)} />
      <div className="Modal__wrapper">
        <div className="Modal__container">
        <button className="Modal__close" onClick={() => props.setIsOpen(false)}>
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
          <p className="Modal__heading">Подтверждение заказа</p>
          <div className="Modal__info">
            <div className="Modal__info-inner">
              <img src={os} alt="" />
              <p className="Modal__info-title">Продукт OS</p>
              <p className="Modal__info-price">3250 ₽</p>
            </div>

            <div className="Modal__counter">
              <button className="Modal__minus" onClick={minus}>
                <svg
                  width="8"
                  height="3"
                  viewBox="0 0 8 3"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7.95455 0V2.03409H0V0H7.95455Z" fill="#252525" />
                </svg>
              </button>
              <span>{count}</span>
              <button className="Modal__plus" onClick={plus}>
                <svg
                  width="9"
                  height="9"
                  viewBox="0 0 9 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.00568 8.0457V0.000244141H5.03977V8.0457H3.00568ZM0 5.04002V3.00593H8.04545V5.04002H0Z"
                    fill="#252525"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* <div className="Modal__content">
          Are you sure you want to delete the item?
        </div> */}
          <form className="Modal__form" onSubmit={onSubmit}>
            <div className="Modal__price">
              <p>К оплате</p>
              <span>{price} ₽</span>
            </div>
            <div className="Modal__input">
              <label htmlFor="name"></label>
              <input
                id="name"
                type="text"
                ref={nameRef}
                placeholder="Ваше имя"
                required
              />
            </div>
            <div className="Modal__input">
              <label htmlFor="email"></label>
              <input
                id="email"
                type="text"
                ref={emailRef}
                placeholder="Ваш email"
                pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                required
              />
            </div>
            <div className="Modal__input">
              <PhoneInput ref={phoneRef} onChange={handleInput}></PhoneInput>
            </div>
            <textarea
              className="Modal__textarea"
              id="textarea"
              placeholder="Дополнительная информация (адрес, пожелания к заказу)"
              type="text"
              ref={textRef}
            ></textarea>
            <button className="Modal__submit">Заказать</button>
          </form>
        </div>
      </div>
    </div>
  );

  async function onSubmit(e) {
    e.preventDefault();

    let form = {
      name: {
        value: nameRef.current.value,
        label: "Name",
        type: "text",
        error: "",
      },
      email: {
        value: emailRef.current.value,
        label: "Phone number or e-mail",
        type: "text",
        error: "",
      },
      phone: {
        value: phoneRef.current.value,
        label: "Phone",
        type: "text",
        error: "",
      },
      price: {
        value: price,
        label: "Price",
        type: "text",
        error: "",
      },
      message: {
        value: textRef.current.value,
        label: "Comment",
        type: "text",
        error: "",
      },
    };

    const formData = new FormData();
    for (const key in form) {
      if (typeof form[key].value !== "undefined") {
        formData.append(key, form[key].value);
      }
    }

    const response = await sendMail(formData);

    if (response.status === 200) {
      props.toggleModals();
      console.log("success");
    } else {
      //   this.$showNotification(this.$notify, {
      //     text: 'An error occurred. Please try again later.',
      //     type: 'error'
      // })
      console.log("error");
    }
  }
};

export default Modal;

import React, { useState } from "react";
import { sendMail } from "../../api";
import os from "../../assets/img/os.png";

const Modal = ({ setIsOpen }) => {
  const nameRef = React.useRef();
  const emailRef = React.useRef();
  const textRef = React.useRef();
  const quantityRef = React.useRef();
  const priceRef = React.useRef();

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

  return (
    <div className="Modal">
      <div className="Modal__bg" onClick={() => setIsOpen(false)} />
      <div className="Modal__container">
        <p className="Modal__heading">Подтверждение заказа</p>
        <div className="Modal__info">
          <div className="Modal__info-inner">
            <img src={os} alt="" />
            <p className="Modal__info-title">Продукт OS</p>
            <p className="Modal__info-price">3250</p>
          </div>

          <div>
            <p ref={quantityRef}>Вы кликнули {count} раз(а)</p>
            <button onClick={minus}>Нажми на меня</button>
            <button onClick={plus}>Нажми на меня</button>
          </div>
        </div>
        <button className="closeBtn" onClick={() => setIsOpen(false)}></button>
        <div className="modalContent">
          Are you sure you want to delete the item?
        </div>

        <form onSubmit={onSubmit}>
        <div>
            <p>К оплате</p>
            <p>{price}</p>
          </div>
          <div>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" ref={nameRef} />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input id="email" type="text" ref={emailRef} />
          </div>
          <textarea id="textarea" type="text" ref={textRef}></textarea>
          <button>Submit</button>
        </form>
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
    // if (!this.$validate(this.form)) {
    //   return
    // }
    // this.preloader = true

    const formData = new FormData();
    for (const key in form) {
      if (typeof form[key].value !== "undefined") {
        formData.append(key, form[key].value);
      }
    }

    const response = await sendMail(formData);

    if (response.status === 200) {
      console.log("success");
      //   this.showMessage()

      //   this.$showNotification(this.$notify, {
      //     text: 'Your message was sent successfully, Thanks!',
      //     type: 'success'
    }

    setTimeout(() => {
      for (const key in form) {
        if (typeof form[key].value !== "undefined") {
          form[key].value = "";
        }
      }
    }, 3000);
    // } else {
    //   this.$showNotification(this.$notify, {
    //     text: 'An error occurred. Please try again later.',
    //     type: 'error'
    //   })
    console.log("error");
  }

  // this.preloader = false

  // };
};

export default Modal;

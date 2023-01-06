import React from 'react'
import { Link } from 'react-scroll'
import PrimaryButton from '../UI/PrimaryButton'
import RoundButton from '../UI/RoundButton'
import logo from '../../assets/img/logo.svg'
import os from '../../assets/img/os.png'
import bubbleOne from '../../assets/img/bubble-one.svg'
import bubbleTwo from '../../assets/img/bubble-two.svg'

const Header = () => {
  return (
    <div className="Header">
      <div className="Header__wrapper">
        <div className="Container">
          <div className="Header__inner">
            <img
              className="Header__bubble-two"
              width="500"
              src={bubbleTwo}
              alt=""
            />
            <img className="Header__bubble-one" src={bubbleOne} alt="" />
            <div className="Header__nav">
              <div className="Header__logo">
                <img src={logo} alt="" />
              </div>
              <ul>
                <li>
                  <Link to="header" spy={true} smooth={true}>
                    Преимущества
                  </Link>
                </li>
                <li>
                  <Link to="feathures" spy={true} smooth={true}>
                    Состав
                  </Link>
                </li>
                <li>
                  <Link to="pricing" spy={true} smooth={true}>
                    О компании
                  </Link>
                </li>
                <li>
                  <Link to="pricing" spy={true} smooth={true}>
                    Продукты Project V
                  </Link>
                </li>
                <li>
                  <Link to="pricing" spy={true} smooth={true}>
                    Регистрация
                  </Link>
                </li>
              </ul>
              <PrimaryButton name="Заказать" />
            </div>
            <div className="Header__content">
              <RoundButton name="Заказать за 3 215 ₽" />
              <h1>
                Витамины OS —<p>для роста,</p> <p>костей и зубов</p>
              </h1>
              <div className="Header__image">
                <img src={os} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header

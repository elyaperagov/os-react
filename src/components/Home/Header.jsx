import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import PrimaryButton from '../UI/PrimaryButton'
import RoundButton from '../UI/RoundButton'
import BurgerButton from '../UI/BurgerButton'
import logo from '../../assets/img/logo.svg'
import os from '../../assets/img/os.png'
import bubbleOne from '../../assets/img/bubble-one.svg'
import bubbleTwo from '../../assets/img/bubble-two.svg'
import { useMediaQuery } from 'react-responsive'

const Header = () => {
  const [isVisible, setToggle] = useState(false)

  // const [isMobile, toggleMObile] = useState(false)

  const isMobile = useMediaQuery({ query: `(max-width: 1149px)` })

  console.log(isMobile)
  if (isMobile) {
    // setToggle({ isVisible: true })
  }

  // function getWindowDimensions() {
  //   const { innerWidth: width } = window
  //   return {
  //     width,
  //   }
  // }

  // function useWindowDimensions() {
  //   const [windowDimensions, setWindowDimensions] = useState(
  //     getWindowDimensions()
  //   )

  //   useEffect(() => {
  //     function handleResize() {
  //       setWindowDimensions(getWindowDimensions())
  //     }

  //     window.addEventListener('resize', handleResize)
  //     return () => window.removeEventListener('resize', handleResize)
  //   }, [])

  //   return windowDimensions
  // }
  // const { width } = useWindowDimensions()

  return (
    <div className="Header">
      {isMobile && (
        <div className="Container">
          <div className="Header__nav">
            <div className="Header__logo">
              <img src={logo} alt="" />
            </div>
            <ul className={isVisible ? 'active' : ''}>
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
            <BurgerButton onClick={() => setToggle(!isVisible)} />
          </div>
        </div>
      )}
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
            {!isMobile && (
              <div className="Header__nav">
                <div className="Header__logo">
                  <img src={logo} alt="" />
                </div>
                <ul className={isVisible ? 'active' : ''}>
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
                <BurgerButton onClick={() => setToggle(!isVisible)} />
              </div>
            )}
            <div className="Header__content">
              <div className="Header__texts">
                <h1>
                  Витамины OS —<p>для роста,</p>
                  <p>
                    костей <br />
                    <span>и зубов</span>
                  </p>
                </h1>
                <p className="Header__text">
                  Продукт OS — уникальная формула на основе морских минералов
                  и комплекса витаминов. Усиливает защиту костей, мышц и
                  суставов.
                </p>
              </div>
              <RoundButton name="Заказать за 3 215 ₽" />
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

import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import PrimaryButton from "../UI/PrimaryButton";
import RoundButton from "../UI/RoundButton";
import BurgerButton from "../UI/BurgerButton";
import logo from "../../assets/img/logo.svg";
import os from "../../assets/img/os.png";
import bubbleOne from "../../assets/img/bubble-one.svg";
import bubbleTwo from "../../assets/img/bubble-two.svg";
import { useMediaQuery } from "react-responsive";

const Header = (props) => {
  const [isVisible, setToggle] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  // const [isMobile, toggleMObile] = useState(false)

  const isMobile = useMediaQuery({ query: `(max-width: 1149px)` });

  console.log(isMobile);
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


  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  const isSticky = (e) => {
    const header = document.querySelector(".header-section");
    const scrollTop = window.scrollY;
    scrollTop >= 150
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };

  return (
    <div className="Header">
      {isMobile && (
        <div className="Container">
          <div className={isVisible ? "Header__bg active" : ""} onClick={() => setToggle(!isVisible)} />
          <div className="header-section">

            <div className="Header__nav">
              <a href="/" className="Header__logo">
                <img src={logo} alt="" />
              </a>
              <ul className={isVisible ? "active" : ""}>
                <li>
                  <Link
                    to="advantages"
                    spy={true}
                    smooth={true}
                    onClick={() => setToggle(!isVisible)}
                  >
                    ????????????????????????
                  </Link>
                </li>
                <li>
                  <Link
                    to="components"
                    spy={true}
                    smooth={true}
                    onClick={() => setToggle(!isVisible)}
                  >
                    ????????????
                  </Link>
                </li>
                <li>
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    onClick={() => setToggle(!isVisible)}
                  >
                    ?? ????????????????
                  </Link>
                </li>
                <li>
                  <Link
                    to="products"
                    spy={true}
                    smooth={true}
                    onClick={() => setToggle(!isVisible)}
                  >
                    ???????????????? Project V
                  </Link>
                </li>
                <li>
                  <Link
                    to="reg"
                    spy={true}
                    smooth={true}
                    onClick={() => setToggle(!isVisible)}
                  >
                    ??????????????????????
                  </Link>
                </li>
              </ul>
              <PrimaryButton name="????????????????" setIsOpen={props.setIsOpen} />
              <BurgerButton isVisible={isVisible} onClick={() => setToggle(!isVisible)} />
            </div>
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
              <div className="header-section">
                <div className="Header__nav">
                  <a href="/" className="Header__logo">
                    <img src={logo} alt="" />
                  </a>
                  <ul className={isVisible ? "active" : ""}>
                    <li>
                      <Link to="advantages" spy={true} smooth={true}>
                        ????????????????????????
                      </Link>
                    </li>
                    <li>
                      <Link to="components" spy={true} smooth={true}>
                        ????????????
                      </Link>
                    </li>
                    <li>
                      <Link to="about" spy={true} smooth={true}>
                        ?? ????????????????
                      </Link>
                    </li>
                    <li>
                      <Link to="products" spy={true} smooth={true}>
                        ???????????????? Project V
                      </Link>
                    </li>
                    <li>
                      <Link to="reg" spy={true} smooth={true}>
                        ??????????????????????
                      </Link>
                    </li>
                  </ul>
                  <PrimaryButton name="????????????????" setIsOpen={props.setIsOpen} />
                  <BurgerButton onClick={() => setToggle(!isVisible)} />
                </div>
              </div>
            )}
            <div className="Header__content">
              <div className="Header__texts">
                <h1>
                  ???????????????? OS ???<p>?????? ??????????,</p>
                  <p>
                    ???????????? <br />
                    <span>?? ??????????</span>
                  </p>
                </h1>
                <p className="Header__text">
                  ?????????????? OS ??? ???????????????????? ?????????????? ?????????????????? ?????????????? ??????????????????
                  ?????????????????????? ??????????????????. ?????????????????? ???????????? ????????????, ???????? ??
                  ????????????????.
                </p>
              </div>
              <RoundButton
                setIsOpen={props.setIsOpen}
                name="???????????????? ???? 3 250 ???"
              />
              <div className="Header__image">
                <img src={os} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

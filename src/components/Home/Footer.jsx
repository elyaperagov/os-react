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
            <a href="/" className="Footer__logo Footer__block">
              <img src={logo} alt="" />
            </a>
            <div className="Footer__block"><p>© 2025 Оздоровительная продукция Vision/Project V</p></div>
            <a className="Footer__block" href="tel:+79212377815">+7-921-237-78-15</a>
            <div className="Footer__socials Footer__block">
              <div className="Footer__social">
                <a href="https://t.me/pirogovala">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19.4354 0.581983C18.9352 0.0685981 18.1949 -0.122663 17.5046 0.0786645L1.408 4.75952C0.679698 4.96186 0.163487 5.54269 0.0244302 6.28055C-0.117628 7.0315 0.378575 7.98479 1.02684 8.38342L6.0599 11.4768C6.57611 11.7939 7.24238 11.7144 7.66956 11.2835L13.4329 5.4843C13.723 5.18231 14.2032 5.18231 14.4934 5.4843C14.7835 5.77623 14.7835 6.24935 14.4934 6.55134L8.71999 12.3516C8.29181 12.7814 8.21178 13.4508 8.52691 13.9702L11.6022 19.0538C11.9623 19.6577 12.5826 20 13.2628 20C13.3429 20 13.4329 20 13.513 19.9899C14.2933 19.8893 14.9135 19.3558 15.1436 18.6008L19.9156 2.52479C20.1257 1.84028 19.9356 1.09537 19.4354 0.581983Z" />
                  </svg>
                </a>
              </div>
              <div className="Footer__social">
                <a href="https://vk.com/club195235991" target="_blank">
                  <svg
                    width="22"
                    height="12"
                    viewBox="0 0 22 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      
                      d="M19.5823 8.41176C19.5823 8.41176 21.361 10.0878 21.801 10.8634C21.8096 10.8746 21.8163 10.887 21.8208 10.9001C22.0001 11.1866 22.0441 11.4112 21.9561 11.5771C21.8076 11.851 21.3049 11.9885 21.1344 12H17.9906C17.7717 12 17.3163 11.9454 16.7619 11.5802C16.3384 11.2979 15.9171 10.833 15.509 10.3785C14.8996 9.70369 14.3727 9.11807 13.8392 9.11807C13.7718 9.11793 13.7049 9.12858 13.6412 9.14956C13.2375 9.2713 12.7249 9.82019 12.7249 11.2821C12.7249 11.7397 12.3465 12 12.0814 12H10.6415C10.1509 12 7.59671 11.8363 5.3318 9.55781C2.5565 6.76824 0.0638991 1.17229 0.0396991 1.12297C-0.115401 0.760889 0.210199 0.563583 0.5622 0.563583H3.7368C4.1625 0.563583 4.3011 0.809166 4.3979 1.02956C4.5101 1.28249 4.9259 2.29421 5.6079 3.43082C6.71231 5.28004 7.39101 6.03254 7.93331 6.03254C8.03519 6.03282 8.13536 6.00748 8.22371 5.95907C8.93211 5.58755 8.80011 3.17369 8.76711 2.67623C8.76711 2.57967 8.76601 1.59839 8.40301 1.12402C8.14341 0.783978 7.70121 0.65174 7.43391 0.603463C7.50541 0.50481 7.65721 0.353682 7.85191 0.264474C8.33701 0.0335839 9.21371 0 10.0838 0H10.5667C11.5105 0.012594 11.7547 0.0703165 12.0979 0.153227C12.7887 0.310652 12.8019 0.7378 12.7414 2.19241C12.7238 2.60801 12.7051 3.07609 12.7051 3.62708C12.7051 3.74462 12.6996 3.87581 12.6996 4.0091C12.6787 4.75529 12.6512 5.59594 13.2034 5.94123C13.275 5.9838 13.3577 6.00634 13.4421 6.0063C13.6335 6.0063 14.2066 6.0063 15.7609 3.46126C16.4429 2.33724 16.9709 1.01172 17.0072 0.912017C17.038 0.856393 17.1304 0.700017 17.2426 0.637047C17.3224 0.596532 17.4118 0.576292 17.5022 0.578275H21.2367C21.6437 0.578275 21.9198 0.637048 21.9737 0.783978C22.0639 1.02221 21.9561 1.74952 20.2511 3.94927C19.964 4.31555 19.7121 4.6325 19.491 4.90957C17.9455 6.84485 17.9455 6.94245 19.5823 8.41176Z"
                    />
                  </svg>
                </a>
              </div>
              <div className="Footer__social">
                <a href="https://wa.me/79212377815">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18.16 4.84C15.28 0.4 9.39998 -0.92 4.83998 1.84C0.399979 4.6 -1.04002 10.6 1.83998 15.04L2.07998 15.4L1.11998 19L4.71998 18.04L5.07998 18.28C6.63998 19.12 8.31998 19.6 9.99998 19.6C11.8 19.6 13.6 19.12 15.16 18.16C19.6 15.28 20.92 9.4 18.16 4.84ZM15.64 14.08C15.16 14.8 14.56 15.28 13.72 15.4C13.24 15.4 12.64 15.64 10.24 14.68C8.19998 13.72 6.51998 12.16 5.31998 10.36C4.59998 9.52 4.23998 8.44 4.11998 7.36C4.11998 6.4 4.47998 5.56 5.07998 4.96C5.31998 4.72 5.55998 4.6 5.79998 4.6H6.39998C6.63998 4.6 6.87998 4.6 6.99998 5.08C7.23998 5.68 7.83998 7.12 7.83998 7.24C7.95998 7.36 7.95998 7.6 7.83998 7.72C7.95998 7.96 7.83998 8.2 7.71998 8.32C7.59998 8.44 7.47998 8.68 7.35998 8.8C7.11998 8.92 6.99998 9.16 7.11998 9.4C7.59998 10.12 8.19998 10.84 8.79998 11.44C9.51998 12.04 10.24 12.52 11.08 12.88C11.32 13 11.56 13 11.68 12.76C11.8 12.52 12.4 11.92 12.64 11.68C12.88 11.44 13 11.44 13.24 11.56L15.16 12.52C15.4 12.64 15.64 12.76 15.76 12.88C15.88 13.24 15.88 13.72 15.64 14.08Z" />
                  </svg>
                </a>
              </div>
              <div className="Footer__social">
                <a href="https://www.instagram.com/pirogovala">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.0001 6.87579C8.2798 6.87579 6.87589 8.2797 6.87589 10C6.87589 11.7203 8.2798 13.1242 10.0001 13.1242C11.7204 13.1242 13.1243 11.7203 13.1243 10C13.1243 8.2797 11.7204 6.87579 10.0001 6.87579ZM19.3704 10C19.3704 8.70626 19.3821 7.42423 19.3095 6.13283C19.2368 4.63283 18.8946 3.30158 17.7978 2.2047C16.6985 1.10548 15.3696 0.765639 13.8696 0.692982C12.5759 0.620326 11.2939 0.632045 10.0025 0.632045C8.7087 0.632045 7.42667 0.620326 6.13527 0.692982C4.63527 0.765639 3.30402 1.10783 2.20714 2.2047C1.10792 3.30392 0.76808 4.63283 0.695424 6.13283C0.622767 7.42658 0.634486 8.70861 0.634486 10C0.634486 11.2914 0.622767 12.5758 0.695424 13.8672C0.76808 15.3672 1.11027 16.6985 2.20714 17.7953C3.30636 18.8945 4.63527 19.2344 6.13527 19.307C7.42902 19.3797 8.71105 19.368 10.0025 19.368C11.2962 19.368 12.5782 19.3797 13.8696 19.307C15.3696 19.2344 16.7009 18.8922 17.7978 17.7953C18.897 16.6961 19.2368 15.3672 19.3095 13.8672C19.3845 12.5758 19.3704 11.2938 19.3704 10ZM10.0001 14.807C7.33995 14.807 5.19308 12.6602 5.19308 10C5.19308 7.33986 7.33995 5.19298 10.0001 5.19298C12.6603 5.19298 14.8071 7.33986 14.8071 10C14.8071 12.6602 12.6603 14.807 10.0001 14.807ZM15.004 6.11876C14.3829 6.11876 13.8814 5.6172 13.8814 4.99611C13.8814 4.37501 14.3829 3.87345 15.004 3.87345C15.6251 3.87345 16.1267 4.37501 16.1267 4.99611C16.1269 5.14359 16.0979 5.28966 16.0416 5.42595C15.9852 5.56224 15.9026 5.68607 15.7983 5.79036C15.694 5.89464 15.5701 5.97733 15.4339 6.03368C15.2976 6.09004 15.1515 6.11895 15.004 6.11876Z" />
                  </svg>
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

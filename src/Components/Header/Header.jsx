import "./Header.css";

function Header() {
  return (
    <div className="header-container">
      <div className="header">
        <div className="header-navbar">
          <div className="header-navbar-contact">
            <div className="header-navbar-contact-location">
              <i><svg xmlns="http://www.w3.org/2000/svg" width="19" height="25" viewBox="0 0 19 25" fill="none">
  <path d="M9.5 0C4.50757 0 0.445946 4.06162 0.445946 9.054C0.445946 15.2497 8.54843 24.3454 8.8934 24.7295C9.21743 25.0904 9.78315 25.0898 10.1066 24.7295C10.4516 24.3454 18.554 15.2497 18.554 9.054C18.554 4.06162 14.4924 0 9.5 0ZM9.5 13.6093C6.98818 13.6093 4.94472 11.5658 4.94472 9.054C4.94472 6.54219 6.98823 4.49873 9.5 4.49873C12.0118 4.49873 14.0552 6.54224 14.0552 9.05405C14.0552 11.5659 12.0118 13.6093 9.5 13.6093Z" fill="#0D4C93"/>
</svg></i>
              <a href="https://www.google.com/maps/place/Chilonzor-10,+Tashkent,+O%60zbekiston/@41.2828272,69.1934583,16z/data=!3m1!4b1!4m6!3m5!1s0x38ae8a2f4da56069:0xe463bd88790d0f97!8m2!3d41.2829494!4d69.1968618!16s%2Fg%2F1tvq2h9l?entry=ttu">
                <span>
                  г.Ташкент, Чиланзар <br /> 10 квартал, дом 3/1
                </span>
              </a>
            </div>
            <div className="header-navbar-contact-phone">
              <div className="header-navbar-contact-phone-icon">
                <i><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <g clip-path="url(#clip0_502_117)">
    <path d="M9.10989 12.8901C7.01002 10.7902 6.53589 8.69037 6.42892 7.84906C6.39903 7.61643 6.47908 7.38315 6.64551 7.21789L8.34482 5.51933C8.59479 5.26952 8.63915 4.88019 8.45178 4.58054L5.74616 0.3793C5.53888 0.0474982 5.11326 -0.0722526 4.76337 0.102783L0.419887 2.1484C0.136944 2.28773 -0.0294791 2.58835 0.00264593 2.90209C0.230232 5.06416 1.17282 10.3791 6.39592 15.6025C11.619 20.826 16.9332 21.7682 19.0964 21.9958C19.4101 22.0279 19.7107 21.8615 19.8501 21.5786L21.8957 17.2351C22.0701 16.886 21.9511 16.4615 21.6207 16.2538L17.4194 13.549C17.12 13.3614 16.7306 13.4054 16.4806 13.6552L14.7821 15.3545C14.6168 15.5209 14.3835 15.6009 14.1509 15.5711C13.3096 15.4641 11.2097 14.99 9.10989 12.8901Z" fill="#0D4C93"/>
    <path d="M17.4483 11.7586C17.0293 11.7586 16.6896 11.419 16.6896 11C16.6861 7.85915 14.1408 5.31388 11 5.31033C10.581 5.31033 10.2414 4.97069 10.2414 4.55171C10.2414 4.13274 10.581 3.79309 11 3.79309C14.9784 3.79748 18.2025 7.02155 18.2069 11C18.2069 11.419 17.8672 11.7586 17.4483 11.7586Z" fill="#0D4C93"/>
    <path d="M21.2414 11.7586C20.8224 11.7586 20.4827 11.419 20.4827 11C20.4769 5.76524 16.2347 1.52309 11 1.51724C10.581 1.51724 10.2414 1.1776 10.2414 0.758621C10.2414 0.339646 10.581 0 11 0C17.0723 0.00668947 21.9933 4.92764 22 11C22 11.2012 21.9201 11.3942 21.7778 11.5364C21.6355 11.6787 21.4426 11.7586 21.2414 11.7586Z" fill="#0D4C93"/>
  </g>
  <defs>
    <clipPath id="clip0_502_117">
      <rect width="22" height="22" fill="white"/>
    </clipPath>
  </defs>
</svg></i>
              </div>
              <div className="header-navbar-contact-phone-numbers">
                <a href="+998911192019">+998 71 276-62-53</a>
                <br />
                <a href="+998911192019">+998 71 276-62-54</a>
              </div>
            </div>
          </div>
          <div className="header-navbar-logo">
            <img
              src="./Images/logo 1.png"
              alt="Bu yerda Logo rasmi joylashgan"
            />
          </div>
          <div className="header-navbar-media">
            <div className="header-navbar-media-search">
              <i ><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
  <path d="M4.72934 17.9273C1.09066 14.2885 1.09074 8.36781 4.72934 4.72906C8.36809 1.09031 14.2887 1.09031 17.9274 4.72906C21.0144 7.81605 21.4819 12.4072 19.3312 15.9924C19.3312 15.9924 19.1768 16.2515 19.3854 16.46C20.5757 17.6503 24.1468 21.2214 24.1468 21.2214C25.0945 22.1691 25.3201 23.4942 24.4797 24.3348L24.335 24.4793C23.4946 25.3199 22.1694 25.0944 21.2217 24.1467C21.2217 24.1467 17.6582 20.5831 16.4703 19.3953C16.2517 19.1766 15.9926 19.3311 15.9926 19.3311C12.4075 21.4817 7.81632 21.0143 4.72934 17.9273ZM16.2045 16.2043C18.8931 13.5156 18.8931 9.14089 16.2044 6.45223C13.5157 3.76364 9.14102 3.76357 6.45243 6.45223C3.76377 9.14082 3.76377 13.5156 6.45243 16.2043C9.1411 18.8928 13.5157 18.8928 16.2045 16.2043Z" fill="#0D4C93"/>
  <path d="M15.6087 10.7745C15.7339 10.7745 15.8611 10.7499 15.9837 10.6981C16.4735 10.4908 16.7027 9.92564 16.4954 9.43574C15.1924 6.35654 11.6273 4.91151 8.54816 6.2145C8.05834 6.42181 7.82917 6.98699 8.03648 7.47689C8.24387 7.96679 8.80889 8.19581 9.29894 7.98857C11.3998 7.09961 13.8324 8.08556 14.7212 10.1864C14.8768 10.5538 15.2334 10.7745 15.6087 10.7745Z" fill="#0D4C93"/>
</svg></i>
            </div>
            <div className="header-navbar-media-facebook">
              <i><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <path d="M12.7037 22V11.9655H16.0706L16.5757 8.05372H12.7037V5.55662C12.7037 4.42442 13.0169 3.65284 14.6423 3.65284L16.712 3.65199V0.153153C16.354 0.10664 15.1254 0 13.6954 0C10.7094 0 8.66505 1.82266 8.66505 5.1692V8.05372H5.28802V11.9655H8.66505V22H12.7037Z" fill="#0D4C93"/>
</svg></i>
              <a href="#">Мы на Facebook</a>
            </div>
            <div className="header-navbar-media-language">
              <img src="./Images/russian.png" alt="" />
              <select>
                <option>Русский</option>
                <option>Узбек</option>
              </select>
            </div>
          </div>
        </div>
        <div className="header-navbar-slider">
          <div className="header-navbar-links">
            <div class="links-one">
              <a href="#">МАГАЗИН</a>
            </div>
            <div className="links-two">
              <a href="#">О КОМПАНИИ</a>
            </div>
            <div className="links-three">
              <a href="#">ПРОДУКЦИЯ</a>
            </div>
            <div className="links-four">
              <a href="#">УСЛУГИ</a>
            </div>
            <div className="links-five">
              <a href="#">АКЦИИ И НОВОСТИ</a>
            </div>
            <div className="links-six">
              <a href="#">ОБРАТНАЯ СВЯЗЬ</a>
            </div>
          </div>
          <div className="header-navbar-slider-content">
            <div className="header-navbar-slider-content-left">
              <h1>Анализатор ABL800 FLEX</h1>
              <p>
                Ориентированный на среднюю или высокую производительность
                тестов, анализатор ABL800 FLEX измеряет полный набор параметров,
                включая pH, газы крови, электролиты, метаболиты и показатели
                оксиметрии
              </p>
              <button>
                <a href="#">Подробнее</a>
              </button>
            </div>
            <div className="header-navbar-slider-content-right">
              <img src="./Images/slide.png" alt="Bu yerda texnika rasmi bor" />
            </div>
          </div>
          <div className="header-navbar-slider-btn">
            <button></button>
            <button></button>
            <button></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Header };

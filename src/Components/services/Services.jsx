import Title from "../title/Title";
import "./Services.css";

function Services({ title }) {
  return (
    <div className="services">
      <div className="services-navbar">
        <a href="">Перейти в каталог нашей продукции</a>
        <i><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <g clip-path="url(#clip0_502_67)">
    <path d="M30 15C30 6.7285 23.2715 -2.94112e-07 15 -6.55671e-07C6.7285 -1.01723e-06 -2.94112e-07 6.72849 -6.55671e-07 15C-1.01723e-06 23.2715 6.72967 30 15 30C23.2703 30 30 23.2715 30 15ZM2.32377 15C2.32377 8.01123 8.01006 2.32377 15 2.32377C21.9899 2.32377 27.6762 8.01123 27.6762 15C27.6762 21.9899 21.9899 27.6762 15 27.6762C8.01006 27.6762 2.32377 21.9888 2.32377 15Z" fill="#0D4C93"/>
    <path d="M13.3966 21.6344L19.2061 15.825C19.6569 15.3718 19.6569 14.6399 19.2061 14.1867L13.3966 8.37725C12.9621 8.0043 12.3196 8.0043 11.885 8.37725C11.3982 8.79438 11.3413 9.52867 11.7584 10.0155L16.7429 15L11.7583 19.9962C11.3075 20.4493 11.3075 21.1813 11.7583 21.6344C12.2115 22.0853 12.9435 22.0853 13.3966 21.6344Z" fill="#0D4C93"/>
  </g>
  <defs>
    <clipPath id="clip0_502_67">
      <rect width="30" height="30" fill="white" transform="translate(30) rotate(90)"/>
    </clipPath>
  </defs>
</svg></i>
      </div>
      <Title title={"УСЛУГИ"} />
      <div className="services-cards">
        <div className="services-card-one">
          <img src="./Images/servic 1.png" alt="" />
          <h2>СЕРВИС ОБОРУДОВАНИЯ</h2>
          <p>
            Компания предоставляет сервисное обслуживание по всем
            предоставляемым продуктам. У наших инженеров имеется опыт и
            сертификаты фирм производителей......
          </p>
          <button>Подробнее</button>
        </div>
        <div className="services-card-two">
          <img
            src="./Images/IIM-CAT-2020-application-deadline-extended-here’s-all-you-need-to-know 1.png"
            alt=""
          />
          <h2>РЕГИСТРАЦИИ</h2>
          <p>
            Обеспечение получения разрешительных документов, регистрационного
            удостоверения на изделия медицинского назначения Подготовка объектов
            к проведению ....
          </p>
          <button>Подробнее</button>
        </div>
        <div className="services-card-three">
          <img
            src="./Images/man-by-truck-guy-delivery-uniform-man-with-clipboard 1.png"
            alt=""
          />
          <h2>УСЛУГИ ЛОГИСТИКИ</h2>
          <p>
            Компания предоставляет сервисное обслуживание по всем
            предоставляемым продуктам. У наших инженеров имеется опыт и
            сертификаты фирм производителей.....
          </p>
          <button>Подробнее</button>
        </div>
      </div>
    </div>
  );
}

export default Services;

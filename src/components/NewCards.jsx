/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { getText } from "../locales";
import { Link } from "react-router-dom";

function NewCards() {
  const { selectedLanguage, selectedFlag, changeLanguage } =
    useContext(LanguageContext);
  return (
    <div className="container newcards justify-content-center h-100 gap-5 mt-5">
      {/* <Link to={"/official-representative-services"}>
        <div className="custom-card">
          <div className="icon-container icon1">
            <p className="icon-number">01</p>
          </div>
          <div className="icon">
            <img src="https://eduagency.uz/img/service2.png" alt="" />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h1 className="title">{getText("headerSwiperTitle7")}</h1>
            <p className="desc">
              {getText("OfficialRepresentativeServicesTitle")}
            </p>
          </div>
        </div>
      </Link> */}

      <Link to={"/student-transfer"}>
        <div className="custom-card">
          <div className="icon-container icon2">
            <p className="icon-number">01</p>
          </div>
          <div className="icon">
            <img src="https://eduagency.uz/img/service2.png" alt="" />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h1 className="title">{getText("headerSwiperTitle2")}</h1>
            <p className="desc">{getText("headerSwiperParagraph2")}</p>
          </div>
        </div>
      </Link>

      {/* <Link to={"/turkiye-burslari"}>
        <div className="custom-card">
          <div className="icon-container icon3">
            <p className="icon-number">03</p>
          </div>
          <div className="icon">
            <img src="https://eduagency.uz/img/service2.png" alt="" />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h1 className="title">{getText("headerSwiperTitle6")}</h1>
            <p className="desc">{getText("TUrkiyeBurslariOtherText")}</p>
          </div>
        </div>
      </Link>

      <Link to={"/organization-services"}>
        <div className="custom-card">
          <div className="icon-container icon4">
            <p className="icon-number">04</p>
          </div>
          <div className="icon">
            <img src="https://eduagency.uz/img/service2.png" alt="" />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h1 className="title">{getText("headerSwiperTitle4")}</h1>
            <p className="desc">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
              porro suscipit distinctio nostrum fugiat omnis, libero
              reprehenderit provident excepturi voluptate?
            </p>
          </div>
        </div>
      </Link> */}

      {/* <Link to={"/turkiye-dili"}>
        <div className="custom-card">
          <div className="icon-container icon5">
            <p className="icon-number">05</p>
          </div>
          <div className="icon">
            <img src="https://eduagency.uz/img/service2.png" alt="" />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h1 className="title">{getText("headerSwiperTitle5")}</h1>
            <p className="desc">{getText("headerSwiperParagraph4")}</p>
          </div>
        </div>
      </Link> */}

      {/* <Link to={"/expert-transfer"}>
        <div className="custom-card">
          <div className="icon-container icon6">
            <p className="icon-number">05</p>
          </div>
          <div className="icon">
            <img src="https://eduagency.uz/img/service2.png" alt="" />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h1 className="title">{getText("headerSwiperTitle3")}</h1>
            <p className="desc">{getText("headerSwiperParagraph3")}</p>
          </div>
        </div>
      </Link> */}

      {/* <Link to={"/educational-technologies"}>
        <div className="custom-card">
          <div className="icon-container icon7">
            <p className="icon-number">07</p>
          </div>
          <div className="icon">
            <img src="https://eduagency.uz/img/service2.png" alt="" />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h1 className="title">{getText("headerSwiperTitle8")}</h1>
            <p className="desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
              voluptatibus id, perferendis odit pariatur sit corporis soluta
              veritatis repellat dolore perspiciatis at reiciendis laborum
              eveniet, odio praesentium ab eaque aliquam.
            </p>
          </div>
        </div>
      </Link> */}

      {/* <Link to={"/application"}>
        <div className="custom-card">
          <div className="icon-container icon8">
            <p className="icon-number">06</p>
          </div>
          <div className="icon">
            <img src="https://eduagency.uz/img/service2.png" alt="" />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h1 className="title">{getText("headerSwiperTitle1")}</h1>
            <p className="desc">{getText("headerSwiperParagraph1")}</p>
          </div>
        </div>
      </Link> */}
    </div>
  );
}

export default NewCards;

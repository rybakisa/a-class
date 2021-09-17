import {isMobileOnly} from "react-device-detect";
import bgImg from "../../../images/map-screen-bg.png";

const MapScreen = () => (
  <section className="map-screen">
    <div className="map-screen__content">
      <h2 className="map-screen__title">География А-Класс</h2>
      <div className="map-screen__map-wrapper">
        <div className="map" style={{position: "relative", overflow: "hidden"}}>
          <a
            href="https://yandex.ru/maps?utm_medium=mapframe&utm_source=maps"
            style={{
              color: "#eee",
              fontSize: "12px",
              position: "absolute",
              top: "0px",
            }}>
            Яндекс.Карты
          </a>
          <a
            href="https://yandex.ru/maps/?from=api-maps&ll=38.090126%2C55.705645&mode=usermaps&origin=jsapi_2_1_78&um=constructor%3A4419a4b09c4d102f87dcdf0dac4ad75a326b32af81334d209cf98d6e18a4ad3b&utm_medium=mapframe&utm_source=maps&z=8"
            style={{
              color: "#eee",
              fontSize: "12px",
              position: "absolute",
              top: "14px",
            }}>
            Яндекс.Карты — транспорт, навигация, поиск мест
          </a>
          <iframe
            title="map"
            src="https://yandex.ru/map-widget/v1/-/CCUmjWRnoC"
            width="100%"
            height={isMobileOnly ? "250px" : "467px"}
            frameBorder="1"
            allowFullScreen={true}
            style={{position: "relative"}}></iframe>
        </div>
      </div>
    </div>
    <img src={bgImg} alt="" className="map-screen__bg" />
  </section>
);

export default MapScreen;

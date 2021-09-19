import {isMobile} from "react-device-detect";
import BenefitsSlider from "../../benefitsSlider/BenefitsSlider";

const BenefitsScreen = () => {
  return (
    <section className="benefits-screen">
      <h2 className="benefits-screen__title">
        {isMobile ? "Преимущества А-Класса" : "Преимущества платформы А-Класс"}
      </h2>
      <BenefitsSlider />
    </section>
  );
};

export default BenefitsScreen;

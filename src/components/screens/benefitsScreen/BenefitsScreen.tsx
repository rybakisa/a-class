import React from "react";
import BenefitsSlider from "../../benefitsSlider/BenefitsSlider";

const BenefitsScreen = () => {
  return (
    <section className="benefits-screen">
      <h2 className="benefits-screen__title">Преимущества платформы А-Класс</h2>
      <BenefitsSlider />
    </section>
  );
};

export default BenefitsScreen;

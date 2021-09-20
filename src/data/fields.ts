import nameIcon from "../images/contact-screen/name-icon.svg";
import emailIcon from "../images/contact-screen/email-icon.svg";
import phoneIcon from "../images/contact-screen/phone-icon.svg";

const FIELDS_DATA = [
  {
    name: "name",
    placeholder: "Имя",
    icon: nameIcon,
  },
  {
    name: "email",
    placeholder: "Почта",
    type: "email",
    icon: emailIcon,
  },
  {
    name: "phone",
    placeholder: "Телефон",
    type: "phone",
    icon: phoneIcon,
  },
];

export {FIELDS_DATA};

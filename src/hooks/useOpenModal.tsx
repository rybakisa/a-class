import {useEffect} from "react";

const useOpenModal = () => {
  useEffect(() => {
    document.body.className = "modal-opened";
    return () => {
      document.body.className = "";
    };
  });
};

export {useOpenModal};

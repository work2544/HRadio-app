import {  useState } from "react";
import IMAGE from "../Assets/posters/poster1.jpg";
import "../Assets/css/Posterpopup.css";

const Posterpopup = () => {
  const [click, setClick] = useState(false);

  const toggled = () => {
    setClick(!click);
  };
  if (click) {
    return <></>;
  }
  return (
    <div onClick={toggled} className="overlay z-50" >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalContainer"
      >
        <img src={IMAGE} onClick={toggled} alt="/" />
      </div>
    </div>
  );
};
export default Posterpopup;

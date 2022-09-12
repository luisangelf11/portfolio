import React, { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import "./BtnUp.css";

export default function BtnUp() {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    if (position === 0) setVisible(false);
    else if (position > 200) setVisible(true);
  }, [position]);

  window.addEventListener("scroll", (e) => {
    let y = document.documentElement.scrollTop || window.pageYOffset;
    setPosition(y);
  });

  const handelUp = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  return (
    <button
      className={visible === false ? "hide" : "active"}
      onClick={handelUp}
    >
      <AiOutlineArrowUp className="icon" />
    </button>
  );
}

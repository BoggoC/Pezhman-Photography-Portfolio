import React, { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";

function BackToTopBtn() {
  const [showBtn, setShowBtn] = useState(false);
  const onScroll = () => {
    window.scrollY > 500 ? setShowBtn(true) : setShowBtn(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="scroll-up">
      <IoIosArrowUp
        className={showBtn ? "showBtn" : "hidden"}
        onClick={scrollToTop}
      />
    </div>
  );
}

export default BackToTopBtn;

import { CgClose } from "react-icons/cg";
import { useEffect, useState, useRef } from "react";
import { FiChevronRight } from "react-icons/fi";
import { FiChevronLeft } from "react-icons/fi";

const ImageGalleryModal = ({
  show,
  onClose,
  children,
  imageTitle,
  imgId,
  onNext,
  onPrev,
  textColor,
  backgroundColor,
}) => {
  return (
    show && (
      <>
        <div
          className="modal-backdrop"
          onClick={onClose}
          style={{
            backgroundColor: `#${backgroundColor}`,
            border: "1px solid red",
          }}
        >
          <div className="back-drop-btns" style={{ color: `#${textColor}` }}>
            <div onClick={onClose} className="modal-close">
              <CgClose />
            </div>
            <div className="navigation">
              <div className="navigation-next-prev">
                <div className="next-prev next" onClick={onNext}>
                  <FiChevronRight />
                </div>
                <div className="next-prev prev" onClick={onPrev}>
                  <FiChevronLeft />
                </div>
              </div>
            </div>
          </div>
          <div key={imgId} className="modal-wrapper">
            <div className="modal-container" style={{ color: `#${textColor}` }}>
              <div className="modal-body">{children}</div>
              <div className="modal-title">{imageTitle}</div>
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default ImageGalleryModal;

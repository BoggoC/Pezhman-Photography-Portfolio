import React from "react";
import { CgClose } from "react-icons/cg";
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
}) => {
  return (
    show && (
      <>
        <div className="modal-backdrop" onClick={onClose} />
        <div className="back-drop-btns">
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
      </>
    )
  );
};

export default ImageGalleryModal;

import React from "react";

const ImageSlider = ({ imageGallery, active, imgId }) => {
  return (
    <div className="slider">
      <div key={imgId} className="slides">
        {imageGallery.map((e, i) => (
          <Slides
            imageTitle
            onNext
            onPrev
            key={imgId}
            {...e}
            active={i === active}
          />
        ))}
      </div>
    </div>
  );
};

const Slides = ({ imgId, singleImage, imageTitle, active }) => {
  return (
    <div key={imgId} className={`slide ${active ? "active" : ""}`}>
      <img src={singleImage} alt={imageTitle} />
      <div className="slide-title">{imageTitle}</div>
    </div>
  );
};

export default ImageSlider;

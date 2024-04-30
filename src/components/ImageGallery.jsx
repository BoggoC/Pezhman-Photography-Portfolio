import { useFetchData } from "./fetchData";
import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import BackToTopBtn from "./BackToTopBtn";
import Socials from "./Socials";
import ImageGalleryModal from "./ImageGalleryModal";
import ImageSlider from "./ImageSlider";

const ImageGallery = () => {
  const { loading, data } = useFetchData();
  const [active, setActive] = useState(0);
  const [show, setShow] = useState(false);

  const imageGalleryData = data[0];
  const imageGallery = imageGalleryData?.imageGallery;
  const imageGalleryId = imageGalleryData?.imageGalleryId;
  const textColor = imageGalleryData?.textColor;
  const backgroundColor = imageGalleryData?.backgroundColor;
  const footer = imageGalleryData?.footer;

  const handleClick = (i) => {
    setActive(i);
    setShow(true);
  };

  const onModalClose = () => {
    setShow(false);
  };

  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        onModalClose();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  const handleNext = () => {
    if (active < imageGallery.length - 1) {
      setActive(active + 1);
    }
  };

  const handlePrev = () => {
    if (active > 0) {
      setActive(active - 1);
    }
  };

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [show]);

  if (loading) {
    return <section className="landing-page"></section>;
  }

  return (
    <section
      className="page"
      style={{ backgroundColor: `#${backgroundColor}` }}
    >
      <NavBar />
      <BackToTopBtn textColor={textColor} />
      <ImageGalleryModal
        title="LightBox"
        show={show}
        onClose={onModalClose}
        onNext={handleNext}
        onPrev={handlePrev}
        textColor={textColor}
        backgroundColor={backgroundColor}
      >
        <ImageSlider
          imageGallery={imageGallery}
          active={active}
          textColor={textColor}
        />
      </ImageGalleryModal>
      <div className="wrapper">
        <article key={imageGalleryId} className="image-gallery">
          {imageGallery.map((e, i) => (
            <div
              key={e.imgId}
              className={`image-row-container ${e.halfOrFullWIdth}`}
            >
              <div
                className={i === active ? "active" : ""}
                onClick={() => handleClick(i)}
                key={e.imgId}
              >
                <img
                  src={e.singleImage}
                  alt={e.imageTitle}
                  className="image"
                  style={{
                    width: `${e.imageWidth}%`,
                  }}
                />
              </div>
            </div>
          ))}
          <div className="footer footer-other">{footer}</div>
        </article>
        <Socials />
      </div>
    </section>
  );
};

export default ImageGallery;

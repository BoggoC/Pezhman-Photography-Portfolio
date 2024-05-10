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

  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollAmount, setScrollAmount] = useState(0);
  const [timerRef, setTimerRef] = useState(0);

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

  const handleScroll = (e) => {
    setScrollAmount(
      scrollAmount + Math.abs(Math.round(window.scrollY) - lastScrollY)
    );
    setLastScrollY(window.scrollY);

    clearTimeout(timerRef);
    if (scrollAmount > 100) {
      setScrollAmount(0);
      onModalClose();
      return;
    }

    setTimerRef(
      setTimeout(() => {
        setScrollAmount(0);
      }, 300)
    );
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
    if (active < imageGallery?.length - 1) {
      setActive(active + 1);
    }
  };

  useEffect(() => {
    const arrowRight = (e) => {
      if (e.keyCode === 39) {
        handleNext();
      }
    };
    window.addEventListener("keydown", arrowRight);
    return () => {
      window.removeEventListener("keydown", arrowRight);
    };
  }, [active]);

  const handlePrev = () => {
    if (active > 0) {
      setActive(active - 1);
    }
  };

  useEffect(() => {
    const arrowLeft = (e) => {
      if (e.keyCode === 37) {
        handlePrev();
      }
    };
    window.addEventListener("keydown", arrowLeft);
    return () => window.removeEventListener("keydown", arrowLeft);
  }, [active]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollAmount, lastScrollY]);

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

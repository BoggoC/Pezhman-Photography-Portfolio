import { useFetchData } from "./fetchData";
import { useState } from "react";
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

  const handleClick = (i) => {
    setActive(i);
    setShow(true);
  };

  const onModalClose = () => {
    setShow(false);
  };

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

  if (loading) {
    return (
      <section className="landing-page">
        <h2>Loading...</h2>
      </section>
    );
  }

  return (
    <section className="page">
      <NavBar />
      <div className="logos" style={{ color: `#${textColor}` }}>
        <BackToTopBtn />
      </div>
      <ImageGalleryModal
        title="LightBox"
        show={show}
        onClose={onModalClose}
        onNext={handleNext}
        onPrev={handlePrev}
        textColor={textColor}
      >
        <ImageSlider
          imageGallery={imageGallery}
          active={active}
          textColor={textColor}
        />
      </ImageGalleryModal>
      <div className="wrapper">
        <article
          key={imageGalleryId}
          className="image-gallery"
          style={{ backgroundColor: `#${backgroundColor}` }}
        >
          {imageGallery.map((e, i) => (
            <div className={`${e.halfOrFullWIdth}`}>
              <div className="image-row-container">
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
            </div>
          ))}
          <Socials />
        </article>
      </div>
    </section>
  );
};

export default ImageGallery;

import { useFetchData } from "./fetchData";
import NavBar from "./NavBar";
import BackToTopBtn from "./BackToTopBtn";
import Socials from "./Socials";

const LandingPage = () => {
  const { loading, data } = useFetchData();

  if (loading) {
    return (
      <section className="landing-page">
        <h2>Loading...</h2>
      </section>
    );
  }

  return (
    <section className="page">
      <div className="wrapper">
        {data.map((imageGalleryData) => {
          const { imageGallery, imageGalleryId, textColor, backgroundColor } =
            imageGalleryData;

          return (
            <article
              key={imageGalleryId}
              className="image-gallery"
              style={{ backgroundColor: `#${backgroundColor}` }}
            >
              <NavBar />
              {imageGallery.map((imageGalleryComponent) => {
                const { imageRowContainer, imageGalleryCardsId } =
                  imageGalleryComponent;

                return (
                  <div
                    key={imageGalleryCardsId}
                    className="image-row-container"
                  >
                    {imageRowContainer.map((imageRowComponent) => {
                      const { imgId, singleImage, imageTitle, imageWidth } =
                        imageRowComponent;
                      return (
                        <div key={imgId} className="image-container">
                          <img
                            src={singleImage}
                            alt={imageTitle}
                            className="image"
                            style={{ width: `${imageWidth}%` }}
                          />
                        </div>
                      );
                    })}
                  </div>
                );
              })}
              <div className="logos" style={{ color: `#${textColor}` }}>
                <BackToTopBtn />
              </div>
              <Socials />
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default LandingPage;

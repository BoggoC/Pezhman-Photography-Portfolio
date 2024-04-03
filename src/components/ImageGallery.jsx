import { useFetchData } from "./fetchData";
import NavBar from "./NavBar";

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
    <section className="landing">
      <div className="wrapper">
        <NavBar />
        {data.map((imageGalleryData) => {
          const { imageGallery, imageGalleryId } = imageGalleryData;

          return (
            <article key={imageGalleryId} className="image-gallery">
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
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default LandingPage;

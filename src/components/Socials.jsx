import { useFetchData } from "./fetchData";

const Socials = () => {
  const { loading, data } = useFetchData();

  if (loading) {
    return (
      <section className="landing-page">
        <h2>Loading...</h2>
      </section>
    );
  }

  return (
    <div className="socials-container">
      {data.map((navBar) => {
        const { socialLink } = navBar;
        return (
          <div className="socials">
            {socialLink.map((socials) => {
              const { socialId, socialTitle, socialImg, socialUrl } = socials;
              return (
                <div key={socialId} className="social-btn-container">
                  <a
                    href={socialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="social"
                  >
                    <img
                      src={socialImg}
                      alt={socialTitle}
                      className="btn-container"
                    />
                  </a>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Socials;

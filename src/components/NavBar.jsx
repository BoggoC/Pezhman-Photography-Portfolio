import { useFetchData } from "./fetchData";

const NavBar = () => {
  const { loading, data } = useFetchData();

  if (loading) {
    return (
      <section className="landing-page">
        <h2>Loading...</h2>
      </section>
    );
  }

  return (
    <nav className="nav-bar">
      <div className="wrapper">
        {data.map((navBar) => {
          const { heroTitle, socialLink, about } = navBar;
          return (
            <nav className="links">
              <a href="" className="title">
                {heroTitle}
              </a>
              <div className="socials">
                {socialLink.map((socials) => {
                  const { socialId, socialTitle, socialImg, socialUrl } =
                    socials;
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
              <a href="" className="title">
                {about}
              </a>
            </nav>
          );
        })}
      </div>
    </nav>
  );
};

export default NavBar;

import { useFetchData } from "./fetchData";
import { Link } from "react-router-dom";

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
          const { navBarId, heroTitle, socialLink, about } = navBar;
          return (
            <nav key={navBarId} className="links">
              <Link to="/" className="title">
                {heroTitle}
              </Link>
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
              <Link to="/aboutandcontact" className="title">
                {about}
              </Link>
            </nav>
          );
        })}
      </div>
    </nav>
  );
};

export default NavBar;

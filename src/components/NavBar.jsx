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
    <>
      {data.map((navBar) => {
        const { navBarId, heroTitle, about, textColor } = navBar;
        return (
          <nav key={navBarId} className="nav-bar">
            <div className="nav-bar-wrapper">
              <nav className="links">
                <Link
                  to="/"
                  className="title"
                  style={{ color: `#${textColor}` }}
                >
                  {heroTitle}
                </Link>
                <Link
                  to="/aboutandcontact"
                  className="title"
                  style={{ color: `#${textColor}` }}
                >
                  {about}
                </Link>
              </nav>
            </div>
          </nav>
        );
      })}
    </>
  );
};

export default NavBar;

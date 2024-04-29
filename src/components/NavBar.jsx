import { useFetchData } from "./fetchData";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { loading, data } = useFetchData();

  if (loading) {
    return <section className="landing-page"></section>;
  }

  return (
    <>
      {data.map((navBar) => {
        const { navBarId, heroTitle, about, textColor } = navBar;
        return (
          <nav key={navBarId} className="nav-bar">
            <div className="nav-bar-wrapper">
              <nav className="links">
                <Link to="/" style={{ color: `#${textColor}` }}>
                  {heroTitle}
                </Link>
                <Link to="/aboutandcontact" style={{ color: `#${textColor}` }}>
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

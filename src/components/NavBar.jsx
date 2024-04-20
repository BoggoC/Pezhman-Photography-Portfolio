import { useFetchData } from "./fetchData";
import { NavLink } from "react-router-dom";

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
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "link-active" : "none"
                  }
                  style={{ color: `#${textColor}` }}
                >
                  {heroTitle}
                </NavLink>
                <NavLink
                  to="/aboutandcontact"
                  className={({ isActive }) =>
                    isActive ? "link-active" : "none"
                  }
                  style={{ color: `#${textColor}` }}
                >
                  {about}
                </NavLink>
              </nav>
            </div>
          </nav>
        );
      })}
    </>
  );
};

export default NavBar;

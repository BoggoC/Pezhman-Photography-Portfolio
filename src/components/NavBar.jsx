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
          const { navBarId, heroTitle, about } = navBar;
          return (
            <nav key={navBarId} className="links">
              <Link to="/" className="title">
                {heroTitle}
              </Link>
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

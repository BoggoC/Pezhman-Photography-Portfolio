import { useFetchData } from "./fetchData";
import NavBar from "./NavBar";
import Socials from "./Socials";

const About = () => {
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
      {data.map((aboutComponent) => {
        const {
          aboutId,
          aboutAndContactTitle,
          aboutAndContactTxt,
          backgroundColor,
          textColor,
        } = aboutComponent;
        return (
          <div
            className="wrapper"
            style={{ backgroundColor: `#${backgroundColor}` }}
          >
            <NavBar />
            <div className="about-container">
              <div key={aboutId} className="about">
                <div className="about-title" style={{ color: `#${textColor}` }}>
                  <h2>{aboutAndContactTitle}</h2>
                </div>
                <div className="about-text" style={{ color: `#${textColor}` }}>
                  {aboutAndContactTxt}
                </div>
              </div>
            </div>
            <Socials />
          </div>
        );
      })}
    </section>
  );
};

export default About;

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
      <div className="wrapper">
        <NavBar />
        {data.map((aboutComponent) => {
          const { aboutId, aboutAndContactTitle, aboutAndContactTxt } =
            aboutComponent;
          return (
            <section key={aboutId} className="about">
              <div className="about-title">
                <h2>{aboutAndContactTitle}</h2>
              </div>
              <div className="about-text">{aboutAndContactTxt}</div>
            </section>
          );
        })}
        <Socials />
      </div>
    </section>
  );
};

export default About;

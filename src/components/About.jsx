import { useFetchData } from "./fetchData";
import NavBar from "./NavBar";

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
    <section className="landing">
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
      </div>
    </section>
  );
};

export default About;

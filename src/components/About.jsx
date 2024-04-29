import { useFetchData } from "./fetchData";
import { useState } from "react";
import NavBar from "./NavBar";
import Socials from "./Socials";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import BackToTopBtn from "./BackToTopBtn";

const About = () => {
  const { loading, data } = useFetchData();
  const [readMoreToggle, setReadMoreToggle] = useState(false);

  const aboutData = data[0];
  const backgroundColor = aboutData?.backgroundColor;
  const textColor = aboutData?.textColor;

  if (loading) {
    return <section className="landing-page"></section>;
  }

  return (
    <>
      <section
        className="page"
        style={{ backgroundColor: `#${backgroundColor}` }}
      >
        <NavBar />
        <BackToTopBtn textColor={textColor} />
        {data.map((aboutComponent) => {
          const {
            aboutId,
            aboutAndContactTitle,
            aboutAndContactTxt,
            readMoreTitle,
            readMore,
            footer,
            textColor,
          } = aboutComponent;
          return (
            <div className="wrapper" key={aboutId}>
              <div className="about-container">
                <div className="about">
                  <div
                    className="about-title"
                    style={{ color: `#${textColor}` }}
                  >
                    <h2>{aboutAndContactTitle}</h2>
                  </div>
                  <div
                    className="about-text"
                    style={{ color: `#${textColor}` }}
                  >
                    {aboutAndContactTxt}
                  </div>
                  <div
                    className="about-text show-more"
                    style={{ color: `#${textColor}` }}
                  >
                    <div
                      className="info-btn show-more"
                      onClick={() => setReadMoreToggle(!readMoreToggle)}
                    >
                      <p>{readMoreTitle}</p>
                      {readMoreToggle ? (
                        <IoIosArrowDown />
                      ) : (
                        <IoIosArrowForward />
                      )}
                    </div>
                  </div>
                  <div
                    className="show-more-text"
                    style={{ color: `#${textColor}` }}
                  >
                    {readMoreToggle
                      ? readMore
                      : `${readMore.toString().substring(0, 0)}`}
                    <div className=" footer footer-obout">{footer}</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <Socials />
      </section>
    </>
  );
};

export default About;

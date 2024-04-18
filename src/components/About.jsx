import { useFetchData } from "./fetchData";
import { useState } from "react";
import NavBar from "./NavBar";
import Socials from "./Socials";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const About = () => {
  const { loading, data } = useFetchData();
  const [readMoreToggle, setReadMoreToggle] = useState(false);

  if (loading) {
    return <section className="landing-page"></section>;
  }

  return (
    <>
      <section className="page">
        {data.map((aboutComponent) => {
          const {
            aboutId,
            aboutAndContactTitle,
            aboutAndContactTxt,
            readMoreTitle,
            readMore,
            footer,
            backgroundColor,
            textColor,
          } = aboutComponent;
          return (
            <div
              className="wrapper"
              key={aboutId}
              style={{ backgroundColor: `#${backgroundColor}` }}
            >
              <NavBar />

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
                    <p>{readMoreTitle}</p>
                    <div
                      className="info-btn show-more"
                      onClick={() => setReadMoreToggle(!readMoreToggle)}
                    >
                      {readMoreToggle ? (
                        <IoIosArrowUp />
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
                  {/* <div className="about-text" style={{ color: `#${textColor}` }}> */}
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

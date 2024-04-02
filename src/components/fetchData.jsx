import { useState, useEffect } from "react";
import client from "../client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export const useFetchData = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({
        content_type: "homePage",
        limit: 1,
        include: 10,
      });
      const data = response.items.map((item) => {
        const { navBarSection, aboutAndContactSection, imageGallerySection } =
          item.fields;

        const { heroTitle, socials, about } = navBarSection.fields;
        const navBarId = navBarSection.sys.id;

        const socialLink = socials.map((item) => {
          const { socialImage, socialUrl } = item.fields;
          const socialId = item.sys.id;
          const socialImg = socialImage?.fields?.file?.url;

          return {
            socialId,
            socialImg,
            socialUrl,
          };
        });

        const { aboutAndContactTitle, aboutAndContactText } =
          aboutAndContactSection.fields;
        const aboutId = aboutAndContactSection.sys.id;
        const options = {
          renderText: (text) => {
            return text.split("\n").reduce((children, textSegment, index) => {
              return [
                ...children,
                index > 0 && <br key={index} />,
                textSegment,
              ];
            }, []);
          },
        };
        const aboutAndContactTxt = documentToReactComponents(
          aboutAndContactText,
          options
        );

        const { imageGalleryCards } = imageGallerySection.fields;

        const imageGallery = imageGalleryCards.map((item) => {
          const { imageCard, imageWidth } = item.fields;
          const imageRowContainer = imageCard.map((item) => {
            const { file, title } = item.fields;
            const singleImage = file?.url;
            const imgId = item.sys.id;

            return {
              imgId,
              singleImage,
              title,
              imageWidth,
            };
          });

          return {
            imageRowContainer,
            // imageWidth,
          };
        });

        return {
          aboutId,
          aboutAndContactTitle,
          aboutAndContactTxt,
          navBarId,
          about,
          heroTitle,
          socialLink,
          imageGallery,
        };
      });

      // console.log(response);
      console.log(data);

      setData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return { loading, data };
};

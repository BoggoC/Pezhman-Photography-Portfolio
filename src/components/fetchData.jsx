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
        const {
          navBarSection,
          aboutAndContactSection,
          imageGallerySection,
          dynamicColoursSection,
        } = item.fields;

        const { heroTitle, socials, about } = navBarSection.fields;
        const navBarId = navBarSection.sys.id;

        const socialLink = socials.map((item) => {
          const { socialTitle, socialImage, socialUrl } = item.fields;
          const socialId = item.sys.id;
          const socialImg = socialImage?.fields?.file?.url;

          return {
            socialId,
            socialTitle,
            socialImg,
            socialUrl,
          };
        });

        const {
          aboutAndContactTitle,
          aboutAndContactText,
          readMoreTitle,
          readMoreText,
          footer,
        } = aboutAndContactSection.fields;
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

        const readMore = documentToReactComponents(readMoreText, options);

        const imageGalleryId = imageGallerySection.sys.id;

        const { imageGalleryCards } = imageGallerySection.fields;

        const imageGallery = imageGalleryCards.map((item) => {
          const imageGalleryCardsId = item.sys.id;
          const { imageCard, imageWidth, halfOrFullWIdth } = item.fields;
          const singleImage = imageCard?.fields?.file?.url;
          const imgId = item.sys.id;
          const imageTitle = imageCard?.fields?.title;

          return {
            imageGalleryCardsId,
            imgId,
            imageTitle,
            singleImage,
            imageWidth,
            halfOrFullWIdth,
          };
        });

        const { dynamicTextColourHexCode, dynamicBackgroundColourHexCode } =
          dynamicColoursSection.fields;
        const textColor = dynamicTextColourHexCode;
        const backgroundColor = dynamicBackgroundColourHexCode;

        return {
          aboutId,
          aboutAndContactTitle,
          aboutAndContactTxt,
          readMoreTitle,
          readMore,
          footer,
          navBarId,
          about,
          heroTitle,
          socialLink,
          imageGallery,
          imageGalleryId,
          textColor,
          backgroundColor,
        };
      });
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

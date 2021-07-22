import React from "react";
import { connect, styled } from "frontity";
import Image from "@frontity/components/image";

const FeaturedMediaAsBackground = ({ state, id }) => {
  const media = state.source.attachment[id];

  if (!media) return null;

  const srcset =
    Object.values(media.media_details.sizes)
      // Get the url and width of each size.
      .map((item) => [item.source_url, item.width])
      // Recude them to a string with the format required by `srcset`.
      .reduce(
        (final, current, index, array) =>
          final.concat(
            `${current.join(" ")}w${index !== array.length - 1 ? ", " : ""}`
          ),
        ""
      ) || null;

  return (
    <FeaturedContainer>
      <StyledImageAsBackground
        alt={media.title.rendered}
        src={media.source_url}
        srcSet={srcset}
      />
    </FeaturedContainer>
  );
};

export default connect(FeaturedMediaAsBackground);

const FeaturedContainer = styled.div`
  // background: pink;
  position: fixed; // "absolute" doesn't work as it should!
  top: 8rem; // = 8rem is header height
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: -1;
`;

const StyledImageAsBackground = styled(Image)`
  display: block;
  width: 100%;
  height: 100%;
  opacity: 0.1;
  // object-fit: contain;
  object-fit: cover;

  // position: absolute;
  // top: 0;
  // bottom: 0;
  // left: 0;
  // right: 0;
`;

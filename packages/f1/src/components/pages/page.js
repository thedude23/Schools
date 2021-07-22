import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import List from "../list";

import FeaturedMediaAsBackground from "../featured-media-as-background";
import { css } from "frontity";

const Page = ({ state, actions, libraries }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  // Get the data of the post.
  const page = state.source[data.type][data.id];

  // Get the html2react component.
  const Html2React = libraries.html2react.Component;

  /**
   * Once the post has loaded in the DOM, prefetch both the
   * home posts and the list component so if the user visits
   * the home page, everything is ready and it loads instantly.
   */
  useEffect(() => {
    actions.source.fetch("/");
    List.preload();
  }, []);

  // Load the post, but only if the data is ready.
  return data.isReady ? (
    <ArticleContainer>
      <div className="post-title">
        <Title dangerouslySetInnerHTML={{ __html: page.title.rendered }} />
      </div>

      {/* Render the content using the Html2React component so the HTML is processed
       by the processors we included in the libraries.html2react.processors array. */}
      <Content>
        <Html2React html={page.content.rendered} />
      </Content>
      
      <FeaturedMediaAsBackground id={page.featured_media} /> {/* css={css`position: absolute !important; top: 14rem; right: -40rem; z-index: -1;`} */}
    </ArticleContainer>
  ) : null;
};

export default connect(Page);

const ArticleContainer = styled.div`
  // background: yellow;
  // margin: 3rem 0;
  margin-top: 8rem; // 8rem is the height of header

  width: 100%;

  .post-title {
    text-align: center;
  }
`;

const Title = styled.h1`
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

/**
 * This component is the parent of the `content.rendered` HTML. We can use nested
 * selectors to style that HTML.
 */
const Content = styled.div`
  word-break: break-word;
  
  * {
    max-width: 1035px;
    width: 100%;
    margin: 0 auto;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 1.5rem;
  }

  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  figure {
    margin: 24px auto;
    /* next line overrides an inline style of the figure element. */
    // width: 100% !important;

    figcaption {
      font-size: 0.7em;
    }
  }

  iframe {
    display: block;
    margin: 0 auto;
  }

  .wp-block-button, .wp-block-code, .wp-block-preformatted {
    width: auto;
    margin-bottom: 3rem;
  }

  .wp-block-button__link {
    color: var(--white);
  }

  .wp-block-embed {
    max-width: 100%;
    position: relative;
    width: 100%;
    margin: 1.5rem auto;
    .wp-block-embed__wrapper {
      &::before {
        content: "";
        display: block;
        padding-top: 56.25%;
      }
    }

    iframe {
      max-width: 100%;
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      border: 0;
    }
  }

  @media (max-width: 992px) {
    .wp-block-columns {
      padding-left: 15px;
      padding-right: 15px;
    }    
  }


  /* Input fields styles */

  input[type="text"],
  input[type="email"],
  input[type="url"],
  input[type="tel"],
  input[type="number"],
  input[type="date"],
  textarea,
  select {
    display: block;
    padding: 6px 12px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    width:100%;
    height: 3rem;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 4px;
    outline-color: transparent;
    transition: outline-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    margin: 8px 0 4px 0;

    &:focus {
      outline-color: #1f38c5;
    }
  }

  input[type="submit"] {
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid #1f38c5;
    padding: 12px 36px;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 4px;
    color: var(--white);
    background-color:var(--brand);
  }

  /* WordPress Core Align Classes */

  @media (min-width: 420px) {
    img.aligncenter,
    img.alignleft,
    img.alignright {
      width: auto;
    }
    .aligncenter {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
    .alignright {
      float: right;
      margin-left: 24px;
    }
    .alignleft {
      float: left;
      margin-right: 24px;
    }
  }
    // .wp-block-group__inner-container {
    //   max-width: 1035px;
    //   margin: 0 auto;
    //   .wp-block-columns {
    //     .wp-block-column.contact-details {
    //       margin-bottom: 2rem;
    //       .contact-maps {
    //         position: relative;
    //         display: block;
    //         width: 100%;
    //         height: 257px;
    //         padding: 0;
    //         overflow: hidden;
    //         margin-bottom: 2rem;
    //         iframe {
    //           position: absolute;
    //           top: 0;
    //           bottom: 0;
    //           left: 0;
    //           width: 100%;
    //           height: 257px;
    //           border: 0;
    //         }
    //       }  
    //       h4 {
    //         margin-bottom: 1.2rem;
    //       }       
    //     }
        .wp-block-column.contact-form {
          @media (min-width: 992px) {
            padding-left: 3rem;
          }
          .wpcf7 {            
            .wpcf7-form {
              label {
                display: block;
              }
            }
          }
        }
      }
    }
  }

  /**Custom style for pages**/
  
  /* TEAM */
  .team-member-img {
    max-width: 6.4rem; // 30rem for other team?
    margin-left: 0 !important;
  }
  .team-wp-block-separator {
    margin-top: -0.5rem;
  }
`;

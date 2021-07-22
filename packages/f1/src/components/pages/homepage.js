import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import List from "../list";
//import Image from "@frontity/components/image";

const HomePage = ({ state, actions, libraries }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  // Get the data of the post.
  const homepage = state.source[data.type][data.id];

  // Get the html2react component.
  const Html2React = libraries.html2react.Component;
  //const BannerSlider = homepage.acf.banner_slider; 
 

  useEffect(() => {
    actions.source.fetch("/");
    List.preload();
  }, []);


  // Load the post, but only if the data is ready.
  return data.isReady ? (        
    <Content>
      <Html2React html={homepage.content.rendered} />
    </Content>
  ) : null;
};

export default connect(HomePage);

const Container = styled.div`
  
`;

const Content = styled.div`
width: 100%;
position: relative;

.wp-block-group__inner-container {
  width: 100%;
  max-width: 1200px;
  padding-right: 15px;
  padding-left: 15px;
  margin: 0px auto;
}

.home-cta {
  padding-top: 34px;
  padding-bottom:34px;
  @media (min-width: 992px) {
    padding-top: 75px;
    padding-bottom:75px;
  }
  background:var(--brand);
  color: var(--white);
  .wp-block-group__inner-container {
    h2 {
      color: var(--white);
    }
    .wp-block-buttons {
      .wp-block-button {
        .wp-block-button__link {
          background: var(--white);  
          border:1px solid transparent;   
          border-color:var(--white);  
          box-shadow:0px 2px 5px 0px rgb(0 0 0 / 0.4); 
          transition: all 0.3s ease;  
          margin-right: 0.5rem;  
          color:var(--brand);
          &:hover {
            color:var(--white);
            background:transparent;
          }
        }
      }
      .wp-block-button.is-style-outline {       
        .wp-block-button__link {
          background: transparent;
          border-color:var(--white);     
          color:var(--white);  
          &:hover {
            background:var(--white);
            color:var(--brand);
          }
        }
      }
    }
  }
}

.home-recent-blog {
  padding-top: 3rem;
  padding-bottom: 3rem;
  @media (min-width: 992px) {
    padding-top: 6rem;
    padding-bottom: 6rem;
  }
  background:#F8F8FA;
  .home-recent-blog-heading {
    margin-bottom: 3rem;
  }
  .wp-block-latest-posts {
    li {
      margin-bottom: 2rem;
      .wp-block-latest-posts__featured-image {
        margin-bottom: 1rem;
        width: 100%;
      }
      a {
        color: var(--black);
        transition: all 0.3s ease;  
        font-weight: 500;
        margin-bottom: 0.5rem;
        display: block;
        &:hover {
          color:var(--brand);
        }
      }
      .wp-block-latest-posts__post-date {
        color: rgb(69 78 86);
      }
    }
  }
}
`;

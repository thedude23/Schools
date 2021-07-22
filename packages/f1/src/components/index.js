import React from "react";
import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header/header";
import Footer from "./footer/footer";
import Footer2 from "./footer/footer-2";
import List from "./list";
import Post from "./post";
import Page from "./pages/page";
import HomePage from "./pages/homepage";
import Jobs from "./pages/jobs";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";
import BootstrapCss from './styles/bootstrap.css';
import gutenbergStyle from "./styles/gutenberg/style.css";
import gutenbergTheme from "./styles/gutenberg/theme.css";

// import GothamBold from "../assets/fonts/Gotham-Bold.otf";
// import GothamLight from "../assets/fonts/Gotham-Light.otf";

// {state.frontity.platform === "server" && <Global
//       styles={css` 
//         @font-face {
//           font-family: "Gotham Bold";
//           font-style: normal;
//           font-weight: normal;
//           font-display: fallback;
//           src: url("${GothamBold}") format("opentype");
//         }
//         @font-face {
//           font-family: "Gotham Light";
//           font-style: normal;
//           font-weight: normal;
//           font-display: fallback;
//           src: url("${GothamLight}") format("opentype");
//         }
//     `}
//    supressHydrationWarning
// />
// }

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />

        {/* Google Font */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,700;1,400&display=swap"/>
      </Head>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={css(BootstrapCss)} />
      <Global styles={css(gutenbergStyle)} />
      <Global styles={css(gutenbergTheme)} />
      <Global styles={globalStyles} />

      {/* Add the header of the site. */}
      <HeadContainer>
        <Header />
      </HeadContainer>

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <Main>
        <Switch>
          <Loading when={data.isFetching} />
          <List when={data.isArchive} />
          <HomePage when={data.isHome} /> 
          <Jobs when={data.isAwsmJobOpenings} />
          <Page when={data.isPage} />
          <Post when={data.isPostType} />
          <PageError when={data.isError} />
        </Switch>
      </Main>

      {/* Add the footer of the site. */}
      <FooterContainer>
        <Footer />
      </FooterContainer>
      <FooterContainer2>
        <Footer2 />
      </FooterContainer2>     
    </>
  );
};

export default connect(Theme);

const globalStyles = css`
  :root {
    --black: #000000;
    --white: #ffffff;
    --bodycolor: #343434;

    --brand: #f4751a; // orange
    --first: #27342f; // very dark grey // main text color
    --second: #575554; // dark grey -- nav & footer 
    --third: #fffefb; // white-ish
    --fourth: #f3f3f3; // grey-ish
    --fifth: #bebdc1; // light grey -- footer info
    --sixth: #9e9e9e; // grey -- footer-2
  }

  // *** FONTS *** //
  // @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,700;1,400&display=swap'); // loaded up with <link>

  // @font-face { 
  //   font-family: 'Gotham Bold';
  //   src: url('../assets/fonts/Gotham-Bold.otf') format('opentype'); // "&{GothamBold}"
  // }
  // @font-face { 
  //   font-family: 'Gotham Light';
  //   src: url('../assets/fonts/Gotham-Light.otf') format('opentype'); // &{GothamLight}
  // }

  *,
  *::after,
  *::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
  }

  ::selection {
    color: var(--third);
    background-color: var(--brand);
  }

  html {
    font-size: 62.5%; // 1 rem = 10px; (10px/16px)x100 = 62.5%
    scroll-behavior: smooth;
  }

  body {
    box-sizing: border-box;
    line-height: 1;
    color: var(--first);
    background-color: var(--third);
    // font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    // font-family: 'Gotham Light';
    font-family: 'Montserrat', sans-serif;
    font-weight: 300; // = light
    font-feature-settings: "kern";
    -webkit-font-smoothing: antialiased;

    overflow-x: hidden;
  }

  #root {
    display: flex;
    flex-direction: column;
    height: auto;
  }
  .container {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    position: relative;
    // padding-right: 15px;
    // padding-left: 15px;
  }
  .section {
    padding: 3rem 0;
    @media (min-width: 992px) {
      padding: 3rem 0;
    }
  }

  .margin-top {
    @media (max-width: 767px) {
      margin-top: 2.5rem !important; // had to use it for 1) Schulwartin and 2) Raumpflegerin wp-blocks (on header - h3) in Team page
    }
  }

  // *** WP-BLOCK *** //
  .reset-margin-wp-block {
    // margin-bottom: -1.5rem;
    margin-bottom: -3rem;
    // @media (min-width: 782px) {
    //   margin-bottom: -3rem;
    // }
  }

  a,
  a:visited {
    font-size: 1.6rem;
    line-height: 1;
    font-weight: bold;
    text-decoration: none;
    color: var(--second);
    &:hover {
      text-decoration: none;
    }
  }

  .special-link {
    color: var(--first);
    font-weight: 300;
    line-height: 2;
    text-decoration: none !important;
    &:hover {
      color: var(--brand);
    }
  }

  .btn {
    margin: 0.5rem 0;
    // color: var(--brand);
    cursor: pointer;
    background: var(--first);
    border-radius: 2em;
    color: var(--white) !important;
    font-size: 1.2rem;
    padding: 0.5em 1em; 
    font-weight: 300;
    &:hover {
      background: var(--second);
    }
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--first);
    // font-family: 'Gotham-Bold';
    font-family: 'Montserrat', sans-serif;
    font-weight: 700; // = bold
    line-height: 1;
  }
  h1 {
    font-size: 4.25rem;
    color: var(--second);
    @media (max-width: 576px) {
      font-size: 2.6rem;
    }
  }
  h2 {
    font-size: 2.6rem;
    @media (max-width: 576px) {
      font-size: 2rem;
    }
  }
  h3 {
    font-size: 2rem; // 1.6rem
    color: var(--brand);
    letter-spacing: 4.8px;
    text-transform: uppercase;
    @media (max-width: 576px) {
      font-size: 1.6rem;
    }
  }
  h4 {
    font-size: 1.6rem;
  }
  h5 {
    font-size: 1.2rem;
  }
  .hero-title {
    margin-bottom: 8rem;
    font-size: 7.2rem;
    @media (max-width: 576px) {
      font-size: 3.6rem;
    }
  }

  p {
    line-height: 2;
    font-size: 1.6rem;
  }

  .font-sm {
    font-size: 1.2rem;
  }

  strong {
    font-weight: bold;
  }

  .center {
    text-align: center;
  }

  blockquote {
    margin: 0 auto;
    // background-color: rgba(0, 0, 0, 0.1);
    background-color: var(--second) !important;
    border-left: 4px solid rgba(12, 17, 43);
    padding: 4px 16px;

    p {
      color: var(--white) !important;
      // font-size: 2rem !important;
      font-size: 1.6rem !important;
    }
    cite {
      // color: var(--brand) !important;
      color: var(--fifth) !important;
      font-size: 1.2rem !important;
    }
  }

  ul {
    list-style: none;
    line-height: 1.6;
    font-size: 1.6rem;
  }
  .ul-styled {
    list-style: none;
    padding: 2rem;
    li {
      font-size: 1.6rem;
      line-height: 1.6;
    }
    li::before {
      content: "•"; 
      color: var(--brand);
      display: inline-block; 
      width: 1em;
      margin-left: -1em;
    }
  }
  .ol-styled { 
    list-style: none; 
    counter-reset: li;
    padding-left: 2rem;
    li {
      font-size: 1.6rem;
      line-height: 1.6;
      counter-increment: li;
    }
    li::before {
      content: counter(li); 
      color: var(--brand);
      font-size: 2rem;
      font-weight: bold;
      width: 1em;
      margin-left: -1em;
      // margin-left: -1.5em;
      margin-right: 0.5em;
      // text-align: right; 
      // direction: rtl;
      // display: inline-block; 
    }
  }
`;

const HeadContainer = styled.div`
  display: flex;
  width: 100vw; // 100%;
  // max-width: 1200px;
  justify-content: space-around;
  align-items: center;
  background: var(--third);
  height: 8rem;
  // border-bottom: 1px solid var(--brand);
  // box-shadow: 0 1rem 1rem rgba(244, 117, 26, 0.4); 
  height: 8rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  padding-right: 1.5rem;
  padding-left: 1.5rem;
  // padding-top: 2.75rem;
  // padding-bottom: 6.25rem;
`;

const FooterContainer = styled.div`
  // position: fixed;
  // bottom: 4rem;
  // left: 0;

  overflow: hidden !important;
  height: 24rem;
  @media only screen and (max-width: 767px) {
    height: 36rem;
  }
  display: flex;
  // width: 100%;
  width: 100vw;
  background: var(--second);
  // margin: 0 auto;
`;

const FooterContainer2 = styled.div`
  // position: fixed;
  // bottom: 0;
  // left: 0;
  
  overflow: hidden !important;
  height: 4rem;
  display: flex;
  // width: 100%;
  width: 100vw;
  background: var(--sixth);
  // margin: 0 auto;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  padding: 0 2rem;

  // @media only screen and (max-width: 768px) { // 782px?
  //   // margin: 0 auto;
  //   // margin-top: 8rem;
  // }
`;

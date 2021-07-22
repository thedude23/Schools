import React from "react";
import { styled, connect } from "frontity";

// import Script from "@frontity/components/script";
import Link from "@frontity/components/link";

// import backImage from "../assets/img/404/error-img-2.jpg";


const description404 = (
  <>
    Die Seite wurde nicht gefunden.{" "}
    <span role="img" aria-label="confused face">
      😕
    </span>
  </>
);

const description = (
  <>
    Don&apos;t panic! Seems like you encountered an error. If this persists,
    <a href="https://community.frontity.org"> let us know </a> or try refreshing
    your browser.
  </>
);


// const goBackButton = (
//   <>
//     <a class="go-back-button wp-block-button is-style-outline">Geh zurück</a>
//   </>
// );
// const GoBack = () => (
//     <Script code={`
//       const button = document.querySelector('.go-back-button');

//       button.addEventListener('click', e => {
//           e.preventDefault();
//           // console.log('Button Worked!');
//           window.history.back();
//       });
//     `} />
// )


// const BackG = () => (
//   <Background>
//     <img src={backImage} alt="Background" />
//   </Background>
// );


// The 404 page component
const Page404 = ({ state }) => {
  const data = state.source.get(state.router.link);

  const title = "Oops! Something went wrong";
  const title404 = "Oops! 404";

  return (
    <Div>
      <Container>
        <Title>{data.is404 ? title404 : title}</Title>
        <Description>{data.is404 ? description404 : description}</Description>
        {/* <GoBack />{goBackButton}<GoBack /> */}
        <Link className="btn wp-block-button is-style-outline" link="/">Geh zurück</Link>
      </Container>
      <Background />
      {/* <BackG /> */}
    </Div>

  );
};

export default connect(Page404);

const Div = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;

  margin: 0 -2rem;
}
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  background-image: linear-gradient(
    to right bottom,
    rgba(243, 243, 243, 0.9),
    rgba(243, 243, 243, 0.9)),
    // url('&{backImage}');
    // url('../assets/img/404/error-img-2.jpg');
    // url('https://images.unsplash.com/photo-1494059980473-813e73ee784b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2098&q=80');
    url('https://images.unsplash.com/photo-1604134967494-8a9ed3adea0d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80');
  background-position: center;
  background-size: cover;
  backgroud-repeat: no-repeat;
  
  // opacity: 0.1;
}
`;

const Container = styled.div`
  // margin-top: -8rem;

  // position: absolute;
  // top: 0;
  // left: 0;

  margin: 0 auto;
  height: 100vh; // option b: height: 92vh;
  padding-bottom: 8vh; // option b: margin-bottom: 8vh/8rem; (8vh/8rem is the size of header)
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 800px; // width: 800px;
  text-align: center;
  // margin: 0;
  // padding: 24px;
`;

const Title = styled.h1`
  // margin: 0;
  // margin-top: calc(8rem + 4rem); // 8rem is height of header
  color: var(--first);
  font-size: 4.2rem;
`;

const Description = styled.div`
  font-size: 1.6rem;
  line-height: 1.6em;
  color: var(--first);
`;



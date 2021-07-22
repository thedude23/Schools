import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";

 
// simplest form (only email)


const Footer = ({ state }) => {
  // const options = state.source.get("acf-options-page");
  return (
    <>
      <Container>
        <div className="row">
          <div className="col-12 col-md-5 col-lg-5 footer-widget widget-one">
            <ul className="widget-list">
              <li>Volksschule & ASO Fürstenfeld</li>
              <li>Parkstraße 1</li>
              <li>8280 Fürstenfeld</li>
            </ul>
          </div>

          <div className="col-12 col-md-5 col-lg-5 footer-widget widget-two">
            <ul className="widget-list">
              <li>Tel.: +43 664 8533068</li>
              <li>E-Mail (VS): vs.fuerstenfeld@fuerstenfeld.at</li>
              <li>E-Mail (ASO): aso.fuerstenfeld@fuerstenfeld.at</li>
            </ul>
          </div>

          <div className="col-12 col-md-2 col-lg-2 footer-widget widget-three">
            {/* <h6 className="widget-title">About</h6> */}
              <ul className="widget-list">
                {/* <li><Link className="widget-list-link" link="/about/">Kontakt</Link></li> */}
                <li><Link className="widget-list-link" link="/impressum/">Impressum</Link></li>
                <li><Link className="widget-list-link" link="/datenschutz/">Datenschutz</Link></li>
              </ul>
          </div>    
        </div>
      </Container>
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Footer);

const Container = styled.footer`
  margin: 0 auto; 
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  // padding-top: 4rem;
  // padding-bottom: 4rem;
  color:var(--white);
  overflow-x: hidden !important; // for white line
  @media only screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    padding-left: 1.5rem;
  }
  .footer-widget {
    @media only screen and (max-width: 767px) {
      margin-bottom: 1.5rem;
    }
    // .widget-title {
    //   color:var(--brand);
    // }
    .widget-list, ul {
      list-style: none !important;
      line-height: 1;
      padding-left: 0;
      li {
        font-size: 1.2rem !important;
        margin-bottom: 1.5rem;
        .widget-list-link {
          font-weight: 300;
          font-size: 1.2rem;
          text-decoration: none;
          transition: all 0.3s ease;
          color: var(--third);
          &:hover {
            color: var(--first);
            // color: var(--brand);
            cursor: pointer;
          }
        }
      }
    }
  }
  .widget-one, .widget-two {
    li {
      // font-size: 1.2rem;
      color: var(--fifth);
    }
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      // left: 0;
      height: 1px;
      width: 5rem; // 20%;
      background-color: var(--brand);
    }
  }
  .widget-three {
    height: 4rem;
    // background: green;
    li::after {
      content: '';
      position: absolute;
      left: 1.5rem;
      top: 2rem;
      border-bottom: 1px solid var(--third);
      width: 15rem; // 150%;
      @media only screen and (max-width: 767px) {
        width: 5rem !important;
      }
    }
  }
}
`;

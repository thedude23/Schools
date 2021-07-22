import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";

 
// simplest form (only email)


const Footer2 = ({ state }) => {
  // const options = state.source.get("acf-options-page");
  return (
    <>
      <Container>
        <div className="row">
          <div className="col-12 footer-widget widget-one">
            <ul className="widget-list">
              <li>© 2020 by citiesapps S&R GmbH</li>
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Footer2);

const Container = styled.footer`
  // background: pink;
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color:var(--white);
  overflow-x: hidden !important; // for white line
  padding-left: 1.5rem;
  .footer-widget {
    .widget-list {
      list-style: none;
      padding-left: 0;
      li {
        margin-top: 1rem;
        font-size: 1.2rem;
        .widget-list-link {
          text-decoration: none;
          transition: all 0.3s ease;
          color: var(--white);
          &:hover {
            color: var(--first);
            cursor: pointer;
          }
        }
      }
    }
  }
`;

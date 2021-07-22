import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import Nav from "./nav";
import MobileMenu from "./menu";

const Header = ({ state }) => {
  return (
    <>
      <BrandContainer>
        <StyledLink link="/">
          {/* <Title><span>Schools</span> by Cities</Title> */}
          <Title><span>VS<span className="span-x">&</span>ASO Fürstenfeld</span></Title>
        </StyledLink>
        <MobileMenu />
      </BrandContainer>
      <Nav />
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const BrandContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  // background: pink;
  // @media (min-width: 768px) {
  //   display: flex;
  //   width: auto;
  // }
  @media (min-width: 1200px) {
    display: flex;
    width: auto;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  transition: all 0.3s ease;
  &:hover {
    color:var(--brand);
  }
`;

const Title = styled.div`
  margin: 0;
  font-size: 2rem;
  color: var(--first);
  span {
    font-weight: bold;
  }
  &:hover {
    color: var(--brand);
    .span-x {
      color: var(--first);
    }
  }

  .span-x {
    color: var(--brand);
  }
`;

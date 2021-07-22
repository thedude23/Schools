import React from "react";
import { styled, connect } from "frontity";
import Link from "../link";

const MenuModal = ({ state }) => {
  const { menu } = state.theme;
  const isThereLinks = menu != null && menu.length > 0;

  return (
    <>
      <MenuOverlay />
      <MenuContent as="nav">
        {isThereLinks &&
          menu.map(([name, link]) => (
            <MenuLink
              key={name}
              link={link}
              aria-current={state.router.link === link ? "page" : undefined}
            >
              {name}
            </MenuLink>
          ))}
      </MenuContent>
    </>
  );
};

const MenuOverlay = styled.div`
  background: var(--second);
  width: 100vw;
  height: 100vh;
  overflow: hidden auto;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
`;

const MenuContent = styled.div`
  z-index: 3;
  display: flex;
  flex-direction: column;
  width: 100%;
  
  // A option
  // padding-top: 40rem;
  
  // B option
  position: fixed;
  top: 0;
  left: 0;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  margin-top: 8rem;
  // background: pink !important;
`;

const MenuLink = styled(Link)`
  width: 100%;
  outline: 0;
  font-size: 2.6rem;
  font-weight: bold;
  text-align: center;
  padding: 1.5rem 0;
  color:var(--third) !important;
    display: block;
    position: relative;
    z-index: 999;
    transition: all 0.3s ease 0s;
  &:hover,
  &:focus {
    color:var(--first) !important;
    background-color: rgba(0, 0, 0, 0.05);
  }
  /* styles for active link */
  &[aria-current="page"] {
    color: var(--brand) !important;
  }
`;

export default connect(MenuModal);

import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";
import NavbarList from "./NavbarList";

const DEFAULT_NAVBAR = [
  {
    label: "Dashboard",
    background: "#383838",
    subCategories: ["Accueil", "Statistique"],
  },
  {
    label: "Project",
    background: "#383838",
    subCategories: ["AirCampus", "Civitime"],
  },
  {
    label: "Members",
    background: "#383838",
    subCategories: [],
  },
]

const Navbar = () => {
  return (
    <NavbarSection>
      <NavbarTitle>AirTime</NavbarTitle>
      <NavbarUnorderedList>
        <NavbarList categories={DEFAULT_NAVBAR} />
      </NavbarUnorderedList>
    </NavbarSection>
  );
};

const NavbarSection = styled.section`
  position: absolute;
  width: 217px;
  height: 100vh;
  left: 0px;
  top: 0px;
  background: #383838;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

const NavbarTitle = styled.h2`
  font-weight: bold;
  color: white;
  font-size: 2rem;
  text-align: center;
`;

const NavbarUnorderedList = styled.ul`
  width: 217px;
  position: absolute;
  left: 0;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

export default Navbar;

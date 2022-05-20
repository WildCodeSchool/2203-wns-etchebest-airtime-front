import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";

type IPropsNavbarList = {
  categories: {
    label: string;
    background?: string;
    subCategories?: [] | string[];
  }[];
};

const NavbarList = ({ categories }: IPropsNavbarList) => {
  const [displaySubCategories, setDisplaySubCategories] = useState(-1);
  const displayedSubCategories = (index: number): void => {
    setDisplaySubCategories(displaySubCategories === index ? -1 : index);
  };
  return (
    <>
      {categories.map((category, index) => {
        return category?.subCategories?.length !== 0 ? (
          <>
            <List onClick={() => displayedSubCategories(index)}>
              {category.label}
            </List>
            <ul key={"ul n°" + index}>
              {displaySubCategories === index &&
                category?.subCategories?.map((subCategory, index2) => {
                  return (
                    <List
                      key={"li n° :" + index2}
                      color={theme.colors.text.grey.lightGrey}
                      border="none"
                    >
                      {subCategory}
                    </List>
                  );
                })}
            </ul>
          </>
        ) : (
          <List key={"li n°" + index}>{category.label}</List>
        );
      })}
    </>
  );
};

interface IPropsList {
  background?: string;
  color?: string;
  border?: string;
}

const List = styled.li<IPropsList>`
  background: ${({ background }) => background || "#383838"};
  border: ${({ border }) => border || "solid 1px #F0F0F0"}};
  border-left: none;
  border-right: none;
  color: ${({ color }) => color || theme.colors.text.white};
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  cursor: pointer;
`;
export default NavbarList;

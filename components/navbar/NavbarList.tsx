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

//

const NavbarList = ({ categories }: IPropsNavbarList) => {
  const [displaySubCategories, setDisplaySubCategories] = useState(-1);

  const displayedSubCategories = (index: number): void => {
    setDisplaySubCategories(displaySubCategories === index ? -1 : index);
  }

  return (
    <>
        {
        categories.map((category, index) => {
            return category?.subCategories?.length !== 0 ?
                (
                    <>
                    <List onClick={() => displayedSubCategories(index)}>{category.label}</List>
                    <ul key={index}>
                        {displaySubCategories === index ? category?.subCategories?.map((subCategory, index2) => {
                            return <List key={index2} color={'lightgrey'}>{subCategory}</List>
                        }) : null}
                    </ul>
                    </>
                ) : <List key={index}>{category.label}</List>
        })
        }
    </>
  )
};

interface IPropsList {
  background?: string;
  color?: string;
}

const List = styled.li<IPropsList>`
  background: ${({ background }) => background || "#383838"};
  border: solid 1px #f0f0f0;
  border-left: none;
  border-right: none;
  color: ${({ color }) => color || theme.colors.text.white};
  text-align: center;
  list-style: none;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
`;

export default NavbarList;

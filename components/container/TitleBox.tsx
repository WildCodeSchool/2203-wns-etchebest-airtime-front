import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";

export const TitleBox = ({
  title,
  manager,
}: {
  title: string;
  manager: string;
}) => {
  return (
    <Box>
      <FlexColumn>
        <ProjectTitle>{title}</ProjectTitle>
        <Flex>
          <Dropdown>Trier par</Dropdown> <Search>Rechercher...</Search>
        </Flex>
      </FlexColumn>
      <Flex>
        Chef de projet :<ProjectManager>{manager}</ProjectManager>
      </Flex>
    </Box>
  );
};

const Box = styled.div`
  background-color: ${theme.colors.background.white};
  border-radius: 10px 10px 0 0;
  color: ${theme.colors.text.grey.darkVador};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-right: 32px;
  margin-left: 32px;
  padding: 24px;
`;

const Flex = styled.div`
align-items: center;
  display: flex;
  flex-direction: row;
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.div`
  color: ${theme.colors.text.black};
  font-size: 32px;
  margin-bottom: 16px;
`;
const ProjectManager = styled.div`
font-weight: 600;
  margin-left: 4px;
`;

const Dropdown = styled.div`
  background-color: ${theme.colors.background.lightGrey};
  border-radius: 10px;
  font-weight: 600;
  margin-right: 32px;
  padding: 8px 16px 8px 0px;
`;
const Search = styled.div`
  background-color: ${theme.colors.background.lightGrey};
  border-radius: 10px;
  font-weight: 600;
  min-width: 200px;
  padding: 8px 16px 8px 0px;
`;

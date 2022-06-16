import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";

const TICKETS_INFORMATION = [
  { label: "How to delete ticket ?" },
  {
    label:
      "This ticket is a way to know how we should process to delete the ticket.",
  },
  {
    label:
      "Message... Documentation available at : www.this-is-a-ticket.com --- 2 hours ago",
  },
];

export const ContainerText = (): JSX.Element => {
  const fontSize = (index: number): number => {
    const tabFontSize = [20, 14, 12];
    return tabFontSize[index];
  };

  const minHeight = (index: number): number => {
    const tabFontSize = [0, 100, 150];
    return tabFontSize[index];
  };

  return (
    <Wrapper>
      {TICKETS_INFORMATION.map((information, index) => {
        return (
          <WrapperText
            background={
              index === 0
                ? theme.colors.text.lightBlue
                : theme.colors.text.grey.lightGrey
            }
            key={"textInformation " + index}
          >
            <TextDescription
              fontSize={fontSize(index)}
              fontWeight={(index === 0 && 600) || 400}
              minHeight={minHeight(index)}
            >
              {information?.label}
            </TextDescription>
          </WrapperText>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const WrapperText = styled.div`
  margin: 10px 0;
  padding: 10px 10px 10px 20px;
  display: flex;
  align-items: center;
  background: ${({ background }: { background: string }) =>
    background || theme.colors.background.white};
  width: 95%;
  min-height: 50px;
  border-radius: 10px;
`;

interface IPropsTextDescription {
  fontWeight?: number;
  fontSize?: number;
  minHeight?: number;
}

const TextDescription = styled.p<IPropsTextDescription>`
  min-height: ${({ minHeight }) => `${minHeight}px` || "unset"};
  margin: 0;
  font-weight: ${({ fontWeight }) => fontWeight};
  font-size: ${({ fontSize }) => `${fontSize}px` || "14px"};
  line-height: 17px;
`;

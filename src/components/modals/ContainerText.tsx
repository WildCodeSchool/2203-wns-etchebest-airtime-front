import React, { useRef } from "react";
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

interface IValueOnChangedValue {
  title: string;
  comment: string;
}

interface IPropsContainerText {
  onChangedValue: ({ title, comment }: IValueOnChangedValue) => void;
}

export const ContainerText = ({
  onChangedValue,
}: IPropsContainerText): JSX.Element => {
  const inputTitle = useRef<HTMLInputElement>();
  const inputComment = useRef<HTMLInputElement>();

  const changedCurrentValueInInput = () =>
    onChangedValue({
      title: inputTitle?.current?.value || "",
      comment: inputComment?.current?.value || "",
    });

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
      <WrapperText
        background={theme.colors.text.lightBlue}
        fontSize={fontSize(0)}
        fontWeight={600}
        minHeight={minHeight(0)}
        ref={inputTitle}
        onChange={changedCurrentValueInInput}
      />
      <WrapperText
        background={theme.colors.text.grey.lightGrey}
        fontSize={fontSize(1)}
        fontWeight={400}
        minHeight={minHeight(1)}
        ref={inputComment}
        onChange={changedCurrentValueInInput}
      />
      <WrapperText
        background={theme.colors.text.grey.lightGrey}
        fontSize={fontSize(2)}
        fontWeight={400}
        minHeight={minHeight(2)}
        defaultValue="Message... Documentation available at : www.this-is-a-ticket.com --- 2 hours ago"
      />
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

interface IPropsTextDescription {
  background?: string;
  fontWeight?: number;
  fontSize?: number;
  minHeight?: number;
  ref?: any;
}

const WrapperText = styled.input<IPropsTextDescription>`
  margin: 10px 0;
  padding: 10px 10px 10px 20px;
  display: flex;
  align-items: center;
  background: ${({ background }) =>
    background || theme.colors.background.white};
  width: 95%;
  min-height: ${({ minHeight }) => `${minHeight}px` || "unset"};
  font-weight: ${({ fontWeight }) => fontWeight};
  font-size: ${({ fontSize }) => `${fontSize}px` || "14px"};
  line-height: 17px;
  border: none;
  outline: none;
  border-radius: 10px;
`;

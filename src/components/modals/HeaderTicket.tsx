import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";

const OPTIONS_VALUE = [
  { label: "To do" },
  { label: "In progress" },
  { label: "Reviewed" },
  { label: "Completed" },
];

export const HeaderTicket = ({
  onClose,
}: {
  onClose: () => void;
}): JSX.Element => {
  return (
    <WrapperHeader>
      <TextIdTicket>Ticket n°000203</TextIdTicket>
      <SelectStatus>
        {OPTIONS_VALUE.map((status, index) => (
          <OptionStatus value={index} key={"option n°" + index}>
            {status.label}
          </OptionStatus>
        ))}
      </SelectStatus>
      <Close onClick={onClose}>X</Close>
    </WrapperHeader>
  );
};

const WrapperHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 100%;
  box-sizing: border-box;
  padding: 0 15px;
`;

const TextIdTicket = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
`;

const SelectStatus = styled.select`
  padding: 10px;
  min-height: 36px;
  min-width: 150px;
  text-align: center;
  border: 1px solid ${theme.colors.border.lightGrey};
  border-radius: 8px;
`;

const OptionStatus = styled.option`
  box-shadow: unset;
  text-transform: uppercase;
`;

interface IPropsClose {
  onClick?: () => void;
}

const Close = styled.div<IPropsClose>`
  padding: 0;
  cursor: pointer;
`;

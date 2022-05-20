import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";

type IPropsGlobalButton = IPropsButton & { label?: string, onClick: () => void };

export const GlobalButton = ({
  fontSize,
  backgroundColor,
  color,
  label,
  onClick,
  disabled,
  ...props
}: IPropsGlobalButton) => {
  return (
    <Button
      color={color}
      backgroundColor={backgroundColor}
      fontSize={fontSize}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {label}
    </Button>
  );
};

type IPropsButton = {
  color?: string;
  backgroundColor?: string;
  fontSize?: number;
  disabled?: boolean;
  onClick: () => void;
};

const Button = styled.button<IPropsButton>`
  padding: 10px 20px;
  border-radius: 5em;
  font-weight: 600;
  font-size: ${({ fontSize }) => `${fontSize}px` || "16px"};
  line-height: 19px;
  border-style: none;
  background: ${({ backgroundColor }) =>
    backgroundColor || theme.colors.background.black};
  color: ${({ color }) => color || theme.colors.text.white};
  text-transform: uppercase;
  border: solid black 1px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  pointer-events: ${({ disabled }) => disabled && "none"};
  cursor: ${({ disabled }) => !disabled && "pointer"};
  opacity: ${({ disabled }) => disabled && "0.5"};
`;

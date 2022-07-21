import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

interface InputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  placeholder: string;
}

export const InputBase = ({ value, onChange, type, placeholder }: InputProps) => {
  return (
    <Input
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
    />
  );
};

const Input = styled.input`
  border: none;
  border-bottom: 2px solid ${theme.colors.border.lightGrey};
  margin: 16px 16px;
  outline: none;
  color: ${theme.colors.text.grey.darkVador};
  width: 300px;
`;

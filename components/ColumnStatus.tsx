import React from 'react'
import styled from 'styled-components';
import { theme } from '../styles/theme';

export const ColumnStatus = ({title, backgroundColor}: {title: string; backgroundColor: string}) => {
  return (
    <Box backgroundColor={backgroundColor}>{title}</Box>
  )
}

const Box = styled.div`
  border-radius: 0 0 10px 10px;
  color: ${theme.colors.text.white};
  background-color: ${({ backgroundColor }: { backgroundColor: string }) =>
    backgroundColor || "#FFFFFF"};
    font-weight: 600;
  text-align: center;
  padding: 5px;
`;

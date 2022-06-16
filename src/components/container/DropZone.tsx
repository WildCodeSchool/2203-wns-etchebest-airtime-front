import React, { ReactNode } from 'react'
import styled from 'styled-components';

export const DropZone = ({children}: {children:ReactNode}) => {
  return (
    <Box>{children}</Box>
  )
}

const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 32px;
  height: 100%;
`;


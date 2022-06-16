import React, { ReactNode } from 'react'
import {theme} from '../../styles/theme'
import styled from 'styled-components'

export const WrapperProject = ({children} : {children: ReactNode}) => {
  return (
    <Wrapper>{children}</Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: ${theme.colors.background.main};
  height: 100vh;
  padding-top: 32px;
`;


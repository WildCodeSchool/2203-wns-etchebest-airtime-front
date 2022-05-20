import React, { ReactNode, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { theme } from "../../styles/theme";

interface IPropsModalTicket {
  children: {
    header: ReactNode;
    main: ReactNode;
    footer: ReactNode;
  };
  animationClose: boolean;
  notAnimationClose?: boolean;
  onClose: Function;
}

export const ModalTicket = ({
  children: { header, main, footer },
  animationClose,
  notAnimationClose = false,
  onClose,
}: IPropsModalTicket): JSX.Element => {
  return (
    <WrapperModalTicket
      launchOutAnimation={animationClose}
      onAnimationEnd={() => (animationClose || notAnimationClose) && onClose()}
    >
      <WrapperContent>
        {header}
        {main}
        {footer}
      </WrapperContent>
    </WrapperModalTicket>
  );
};

const launchIn = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;

const launchOut = keyframes`
0%{
  opacity: 1;
}
100%{
  opacity: 0;
}
`;

const WrapperModalTicket = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  left: 0;
  bottom: 0;
  border-radius: 10px;
  display: flex;
  align-items: start;
  justify-content: center;
  background: ${theme.colors.background.transparentWhite};
  /* backdrop-filter: blur(3px); */
  transform: translateY(-70%);
  z-index: 10;
  transition: all 1s;
  animation: ${({ launchOutAnimation }: { launchOutAnimation: boolean }) =>
    launchOutAnimation
      ? css`.8s ease ${launchOut}`
      : css`.8s ease ${launchIn} both`};
`;

const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  box-shadow: ${theme.shadows.card};
  overflow: hidden;
  border-radius: 10px;
`;

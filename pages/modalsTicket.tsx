import type { NextPage } from "next";
import { useState } from "react";
import styled from "styled-components";
import { ContainerText } from "../components/modals/ContainerText";
import { HeaderTicket } from "../components/modals/HeaderTicket";
import { ModalTicket } from "../components/modals/ModalTicket";
import { theme } from "../styles/theme";
import { GlobalButton } from "../components/buttons/GlobalButton";

const ModalsTicket: NextPage = () => {
  const [displayedModalTicket, setDisplayedModalTicket] = useState(false);
  const [closeModalTicket, setCloseModalTicket] = useState(false);

  const onCloseModalTicket = () => {
    setCloseModalTicket(false);
    setDisplayedModalTicket(false);
  };

  return (
    <>
      <button
        onClick={() => {
          setDisplayedModalTicket(true);
        }}
      >
        Open
      </button>
      {displayedModalTicket && (
        <ModalTicket
          animationClose={closeModalTicket}
          onClose={onCloseModalTicket}
        >
          {{
            header: (
              <HeaderTicket
                onClose={() => {
                  setCloseModalTicket(true);
                }}
              />
            ),
            main: (
              <WrapperContent>
                <ContainerText />
                <Divider />
              </WrapperContent>
            ),
            footer: (
              <WrapperFooter>
                <CancelButton
                  label="Annuler"
                  backgroundColor={theme.colors.background.white}
                  color={theme.colors.text.black}
                  onClick={() => ""}
                />
                <ValidateButton label="Valider" onClick={() => ""} />
              </WrapperFooter>
            ),
          }}
        </ModalTicket>
      )}
    </>
  );
};

const WrapperContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
`;

const Divider = styled.div`
  width: 100%;
  padding: 0;
  margin: 20px 0;
  border: 2.5px solid ${theme.colors.background.lightGrey};
  border-radius: 10px;
  background: ${theme.colors.background.lightGrey};
`;

const WrapperFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px 25px 25px 0;
  column-gap: 25px;
`;

const ValidateButton = styled(GlobalButton)``;

const CancelButton = styled(GlobalButton)``;

export default ModalsTicket;

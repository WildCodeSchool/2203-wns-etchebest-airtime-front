import type { NextPage } from "next";
import { useState } from "react";
import styled from "styled-components";
import { ContainerText } from "../components/modals/ContainerText";
import { HeaderTicket } from "../components/modals/HeaderTicket";
import { ModalTicket } from "../components/modals/ModalTicket";
import { theme } from "../styles/theme";
import { GlobalButton } from "../components/buttons/GlobalButton";
import { useMutation } from "@apollo/client";
import { CREATE_TICKET } from "../graphql/mutations/ticketMutation";
import { GET_ALL_TICKETS } from "../graphql/queries/ticketQuery";

const ModalsTicket: NextPage = () => {
  const [displayedModalTicket, setDisplayedModalTicket] = useState(false);
  const [closeModalTicket, setCloseModalTicket] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("to do");
  const [currentValueInput, setCurrentValueInput] = useState({
    title: "",
    comment: "",
  });

  const selectStatus = (value: string) => setSelectedStatus(value);

  const changedValueInput = ({
    title,
    comment,
  }: {
    title: string;
    comment: string;
  }) => {
    setCurrentValueInput({
      title,
      comment,
    });
  };

  const [createTicket, { loading: ticketLoading, error: ticketError }] =
    useMutation(CREATE_TICKET, {
      refetchQueries: [GET_ALL_TICKETS],
    });

  const createATicket = () => {
    createTicket({
      variables: {
        title: currentValueInput?.title,
        comment: currentValueInput?.comment,
        estimated_time: 3,
        spent_time_minutes: 4,
        status: selectedStatus.toLowerCase(),
        project_id: 1,
        user_id: "aef4f44f-bbef-11ec-b561-309c23902d82",
      },
    });
  };

  const onCloseModalTicket = () => {
    setCloseModalTicket(false);
    setDisplayedModalTicket(false);
  };

  if (ticketLoading) return <p>Submitting...</p>;
  if (ticketError) return <p>Error on submit: {ticketError.message}</p>;

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
                onChangedValue={selectStatus}
              />
            ),
            main: (
              <WrapperContent>
                <ContainerText onChangedValue={changedValueInput} />
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
                <ValidateButton label="Valider" onClick={createATicket} />
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

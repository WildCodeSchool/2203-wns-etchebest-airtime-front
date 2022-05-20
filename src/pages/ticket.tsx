import { useMutation } from "@apollo/client";
import type { NextPage } from "next";
import { useState } from "react";
import styled from "styled-components";
import { GlobalButton } from "../components/buttons/GlobalButton";
import { ModalTicket } from "../components/modals/ModalTicket";
import { ContentModalTicket } from "../components/modalTicket/ContentModalTicket";
import { HeaderTicket } from "../components/modalTicket/HeaderTicket";
import { CREATE_TICKET } from "../graphql/mutations/ticketMutation";
import { GET_ALL_TICKETS } from "../graphql/queries/ticketQuery";
import { theme } from "../styles/theme";

interface IInputValue {
  title?: string;
  description?: string;
}

const DEFAULT_INPUT_VALUE : IInputValue  = {
  title: "",
  description: "",
}

const Ticket: NextPage = () => {
  const [displayedModalTicket, setDisplayedModalTicket] = useState(false);
  const [startAnimationCloseModal, setStartAnimationCloseModal] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("to do");
  const [storageInputValue, setStorageInputValue] = useState<IInputValue>(DEFAULT_INPUT_VALUE);

  const selectStatus = (value: string) => setSelectedStatus(value);

  const changedValueInput = (value: IInputValue) =>
    setStorageInputValue((e) => ({
      ...e,
      ...value,
    }));

  const resetStorageInputValue = () => setStorageInputValue(DEFAULT_INPUT_VALUE)

  const [createTicket, { loading: ticketLoading, error: ticketError }] =
    useMutation(CREATE_TICKET, {
      refetchQueries: [GET_ALL_TICKETS],
    });

  const createATicket = () => {
    createTicket({
      variables: {
        title: storageInputValue.title || '',
        comment: storageInputValue.description || '',
        estimated_time: 3,
        spent_time_minutes: 4,
        status: selectedStatus.toLowerCase(),
        project_id: 1,
        user_id: "aef4f44f-bbef-11ec-b561-309c23902d82",
      },
    });
    resetStorageInputValue()
  };

  const onCloseModalTicket = () => {
    setStartAnimationCloseModal(false);
    setDisplayedModalTicket(false);
  };

  const launchAnimatedCloseModal = () => setStartAnimationCloseModal(true);

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
          animationClose={startAnimationCloseModal}
          onClose={onCloseModalTicket}
        >
          <HeaderTicket
            onClose={launchAnimatedCloseModal}
            onChangedValue={selectStatus}
          />
          <WrapperContent>
            <ContentModalTicket
              onChangedValue={changedValueInput}
              valueInput={storageInputValue}
            />
            <Divider />
          </WrapperContent>
          <WrapperFooter>
            <CancelButton
              label="Annuler"
              backgroundColor={theme.colors.background.white}
              color={theme.colors.text.black}
              onClick={resetStorageInputValue}
            />
            <ValidateButton
              label="Valider"
              onClick={createATicket}
              disabled={ticketLoading}
            />
          </WrapperFooter>
          {ticketLoading && <p>Submitting...</p>}
          {ticketError && <p>Error on submit: {ticketError.message}</p>}
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

export default Ticket;

import { useRef } from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";

interface IValueOnChangedValue {
  title?: string;
  description?: string;
}

interface IPropsContainerText {
  onChangedValue: (value: IValueOnChangedValue) => void;
  valueInput: IValueOnChangedValue;
}

export const ContentModalTicket = ({
  onChangedValue,
  valueInput
}: IPropsContainerText): JSX.Element => {

  const changeCurrentFieldValue = (e: React.ChangeEvent<HTMLInputElement>) =>
    onChangedValue({
      [e.target.name]: e.target.value || "",
    });

  return (
    <WrapperContentModalTicket>
      <TitleField
        background={theme.colors.text.lightBlue}
        fontSize={20}
        fontWeight={600}
        placeholder='titre...'
        name='title'
        value={valueInput.title}
        onChange={changeCurrentFieldValue}
      />
      <DescriptionField
        background={theme.colors.text.grey.lightGrey}
        fontSize={14}
        fontWeight={400}
        minHeight={100}
        placeholder='Description...'
        name='description'
        value={valueInput.description}
        onChange={changeCurrentFieldValue}
      />
    </WrapperContentModalTicket>
  );
};

const WrapperContentModalTicket = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

interface IPropsTextDescription {
  background?: string;
  fontWeight?: number;
  fontSize?: number;
  minHeight?: number;
  ref?: any;
}

const TitleField = styled.input<IPropsTextDescription>`
  margin: 10px 0;
  padding: 10px 10px 10px 20px;
  display: flex;
  align-items: center;
  background: ${({ background }) =>
    background || theme.colors.background.white};
  width: 95%;
  min-height: ${({ minHeight }) => `${minHeight}px` || "0"};
  font-weight: ${({ fontWeight }) => fontWeight};
  font-size: ${({ fontSize }) => `${fontSize}px` || "14px"};
  line-height: 17px;
  border: none;
  outline: none;
  border-radius: 10px;
`;

const DescriptionField = styled(TitleField)``
import React from "react";
import { DropshipCheckbox, DropshipContainer } from "./styles/Dropship.styled";
import { TitleContainer, TitleShadow, TitleText } from "./styles/Title.styled";

export default function Title({ textTitle, checkbox }) {
  return (
    <>
      <TitleContainer>
        <TitleShadow />
        <TitleText>{textTitle}</TitleText>
        {checkbox && (
          <DropshipContainer>
            <DropshipCheckbox />
            <p>Send as dropshipper</p>
          </DropshipContainer>
        )}
      </TitleContainer>
    </>
  );
}

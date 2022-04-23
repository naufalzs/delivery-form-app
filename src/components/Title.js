import React from "react";
import Checkbox from "./Checkbox";
import { DropshipContainer } from "./styles/Container.styled";
import { TitleContainer, TitleShadow, TitleText } from "./styles/Title.styled";

export default function Title({ textTitle, checkbox }) {
  return (
    <>
      <TitleContainer>
        <TitleShadow />
        <TitleText>{textTitle}</TitleText>
        {checkbox && (
          <DropshipContainer>
            <Checkbox />
            <p>Send as dropshipper</p>
          </DropshipContainer>
        )}
      </TitleContainer>
    </>
  );
}

import React from "react";
import { TitleContainer, TitleShadow, TitleText } from "./styles/Title.styled";

export default function Title({ textTitle, checkbox }) {
  return (
    <>
      <TitleContainer>
        <TitleShadow />
        <TitleText>{textTitle}</TitleText>
      </TitleContainer>
    </>
  );
}

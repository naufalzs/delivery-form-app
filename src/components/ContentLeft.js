import React from "react";
import Step1 from "./Step1";
import { ContentLeftStyled } from "./styles/Container.styled";

export default function ContentLeft() {
  return (
    <ContentLeftStyled>
      <Step1 />
    </ContentLeftStyled>
  );
}

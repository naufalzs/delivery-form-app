import React from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { ContentLeftStyled } from "./styles/Container.styled";

export default function ContentLeft() {
  return (
    <ContentLeftStyled>
      <Step1 />
      {/* <Step2 /> */}
      {/* <Step3/> */}
    </ContentLeftStyled>
  );
}

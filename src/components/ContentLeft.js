import React from "react";
import { useSelector } from "react-redux";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { ContentLeftStyled } from "./styles/Container.styled";

export default function ContentLeft() {
  const activeStep = useSelector((state) => state.step.activeStep);

  const contentLeftSelector = () => {
    switch (activeStep) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
        default: return;
    }
  };
  return (
    <ContentLeftStyled>
      {contentLeftSelector()}
    </ContentLeftStyled>
  );
  //   return <ContentLeftStyled>{contentLeftSelector()}</ContentLeftStyled>;
}

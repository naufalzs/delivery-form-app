import React from "react";
import { StepperContainer, StepperPosition } from "../styles/Stepper.styled";
import Step from "./Step";

export default function Stepper() {  
  return (
    <StepperPosition>
      <StepperContainer>
        <Step active num={1} />
        <Step num={2} />
        <Step num={3} noArrow />
      </StepperContainer>
    </StepperPosition>
  );
}

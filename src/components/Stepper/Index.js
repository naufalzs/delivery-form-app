import React from "react";
import { useSelector } from "react-redux";
import { StepperContainer, StepperPosition } from "../styles/Stepper.styled";
import Step from "./Step";

export default function Stepper() {
  const activeStep = useSelector((state) => state.step.activeStep);
  const stepList = ["Delivery", "Payment", "Finish"];
  return (
    <StepperPosition>
      <StepperContainer>
        {stepList.map((e, i) => (
          <Step
            key={e}
            num={i + 1}
            active={i + 1 <= activeStep  ? true : false}
            text={e}
            noArrow={i + 1 === stepList.length ? true : false}
          />
        ))}
        {/* <Step active num={1} />
        <Step num={2} />
        <Step num={3} noArrow /> */}
      </StepperContainer>
    </StepperPosition>
  );
}

import React from "react";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { StepperContainer, StepperPosition } from "../styles/Stepper.styled";
import Step from "./Step";

export default function Stepper() {
  const activeStep = useSelector((state) => state.step.activeStep);
  const stepList = ["Delivery", "Payment", "Finish"];
  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });
  return (
    <StepperPosition>
      <StepperContainer>
        {!isMobile ? (
          stepList.map((e, i) => (
            <Step
              key={e}
              num={i + 1}
              active={i + 1 <= activeStep ? true : false}
              text={e}
              noArrow={i + 1 === stepList.length ? true : false}
            />
          ))
        ) : (
          <Step
            num={activeStep}
            active
            text={stepList[activeStep - 1]}
            noArrow
          />
        )}
      </StepperContainer>
    </StepperPosition>
  );
}

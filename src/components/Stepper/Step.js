import React from "react";
import { ArrowStep, CircleStep, TextStep } from "../styles/Stepper.styled";

export default function StepStepper({ num, active, noArrow }) {
  return (
    <>
      <CircleStep active={active}>
        <p>{num}</p>
      </CircleStep>
      <TextStep active={active}>Delivery</TextStep>
      {!noArrow && <ArrowStep />}
    </>
  );
}

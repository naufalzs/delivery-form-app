import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { prevStep } from "../redux/step/stepAction";
import { resetForm } from "../redux/user/userAction";
import { ArrowBackLink, BackLinkContainer } from "./styles/BackLink.styled";

export default function BackLink() {
  const dispatch = useDispatch();
  const activeStep = useSelector((state) => state.step.activeStep);

  const handleTextBacklink = () => {
    switch (activeStep) {
      case 1:
        return "Back to cart";
      case 2:
        return "Back to delivery";
      case 3:
        return "Go to homepage";
      default:
        return;
    }
  };

  return (
    <>
      <BackLinkContainer
        onClick={() => {
          activeStep === 3 && dispatch(resetForm());
          dispatch(prevStep());
        }}
      >
        <ArrowBackLink />
        <p>{handleTextBacklink()}</p>
      </BackLinkContainer>
    </>
  );
}

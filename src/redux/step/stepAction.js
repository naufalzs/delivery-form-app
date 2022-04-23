import { NEXT_STEP, PREV_STEP } from "./stepTypes";

export const nextStep = () => {
  return {
    type: NEXT_STEP,
  };
};

export const prevStep = () => {
  return {
    type: PREV_STEP,
  };
};

import { NEXT_STEP, PREV_STEP } from "./stepTypes";

const initialState = {
  activeStep: 1,
};

const stepReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_STEP:
      if (state.activeStep !== 3) {
        return {
          activeStep: state.activeStep + 1,
        };
      } else {
        return {
          activeStep: 1,
        };
      }
    case PREV_STEP:
      if (state.activeStep !== 1) {
        if (state.activeStep === 3) {
          return { activeStep: 1 };
        } else
          return {
            activeStep: state.activeStep - 1,
          };
      }
      break;
    default: {
      return state;
    }
  }
};

export default stepReducer;

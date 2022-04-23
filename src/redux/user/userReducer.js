import {
  FILL_FORM,
  CHOOSE_SHIPMENT,
  CHOOSE_PAYMENT,
  RESET_FORM,
  CHECK_DROPSHIP,
  SET_BUTTON,
  GENERATE_ORDER_ID,
} from "./userTypes";

const initialState = {
  form: "",
  shipment: "",
  payment: "",
  dropship: false,
  button: false,
  orderID: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILL_FORM:
      return {
        ...state,
        form: { ...action.payload },
      };
    case CHOOSE_SHIPMENT:
      return {
        ...state,
        shipment: action.payload,
      };
    case CHOOSE_PAYMENT:
      return {
        ...state,
        payment: action.payload,
      };
    case CHECK_DROPSHIP:
      return {
        ...state,
        dropship: action.payload,
      };
    case RESET_FORM:
      return {
        initialState,
      };
    case SET_BUTTON:
      return {
        ...state,
        button: action.payload,
      };
    case GENERATE_ORDER_ID:
      return {
        ...state,
        orderID: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;

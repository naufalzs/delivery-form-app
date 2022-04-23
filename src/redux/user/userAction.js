import RandExp from "randexp";
import {
  FILL_FORM,
  RESET_FORM,
  CHOOSE_SHIPMENT,
  CHOOSE_PAYMENT,
  CHECK_DROPSHIP,
  SET_BUTTON,
  GENERATE_ORDER_ID,
} from "./userTypes";

export const fillForm = (form) => {
  return {
    type: FILL_FORM,
    payload: form,
  };
};

export const resetForm = () => {
  return {
    type: RESET_FORM,
  };
};

export const chooseShipment = (shipment) => {
  return {
    type: CHOOSE_SHIPMENT,
    payload: shipment,
  };
};

export const choosePayment = (payment) => {
  return {
    type: CHOOSE_PAYMENT,
    payload: payment,
  };
};

export const checkDropship = (dropship) => {
  return {
    type: CHECK_DROPSHIP,
    payload: dropship,
  };
};

export const setButton = (state) => {
  return {
    type: SET_BUTTON,
    payload: state,
  };
};

export const genOrderID = () => {
  const randomId = new RandExp(/[^\W\s01IO]{5}/i).gen();
  return {
    type: GENERATE_ORDER_ID,
    payload: randomId,
  };
};

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkDropship, setButton } from "../redux/user/userAction";
import { CheckboxContainer, CheckIconCheckbox } from "./styles/Checkbox.styled";

export default function Checkbox() {
  const formState = useSelector((state) => state.user.form);
  const checked = useSelector((state) => state.user.dropship);
  const dispatch = useDispatch();

  const handleCheckbox = () => dispatch(checkDropship(!checked));
  useEffect(() => {
    if (checked) {
      dispatch(setButton(false));
    } else {
      if (formState !== "") {
        if (formState?.email && formState?.phone_number && formState?.address)
          dispatch(setButton(true));
      }
    }
  }, [checked, dispatch, formState]);

  return (
    <CheckboxContainer onClick={handleCheckbox} checked={checked}>
      <CheckIconCheckbox checked={checked} />
    </CheckboxContainer>
  );
}

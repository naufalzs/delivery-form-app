import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkDropship, setButton } from "../redux/user/userAction";
import { CheckboxContainer, CheckIconCheckbox } from "./styles/Checkbox.styled";

export default function Checkbox() {
  const checked = useSelector((state) => state.user.dropship);
  const dispatch = useDispatch();

  const handleCheckbox = () => dispatch(checkDropship(!checked));

  return (
    <CheckboxContainer onClick={handleCheckbox} checked={checked}>
      <CheckIconCheckbox checked={checked} />
    </CheckboxContainer>
  );
}

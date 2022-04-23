import React, { useState } from "react";
import { CheckboxContainer, CheckIconCheckbox } from "./styles/Checkbox.styled";

export default function Checkbox() {
  const [checked, setChecked] = useState(false);
  return (
    <CheckboxContainer
      onClick={() => {
        setChecked(!checked);
      }}
      checked={checked}
    >
      <CheckIconCheckbox checked={checked} />
    </CheckboxContainer>
  );
}

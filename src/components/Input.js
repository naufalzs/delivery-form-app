import React, { useState } from "react";
import {
  CheckIconInput,
  ErrorIconInput,
  InputContainer,
  InputStyled,
  Placeholder,
} from "./styles/Input.styled";

export default function Input({ placeholder, disabled }) {
  const [focus, setFocus] = useState(false);
  const [error, setError] = useState(false);
  const [value, setValue] = useState("");
  return (
    <InputContainer focus={focus} error={error} disabled={disabled}>
      <Placeholder focus={focus} error={error} value={value}>
        {placeholder}
      </Placeholder>
      <InputStyled
        onFocus={() => setFocus(true)}
        onBlur={() => focus && setFocus(false)}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={disabled}
      />
      {!error ? (
        <CheckIconInput focus={focus} error={error} />
      ) : (
        <ErrorIconInput focus={focus} error={error} />
      )}
    </InputContainer>
  );
}

import React, { useState } from "react";
import {
  InputContainer,
  LetterCount,
  Placeholder,
  TextAreaContainer,
  TextareaStyled,
} from "./styles/Input.styled";

export default function TextArea({ placeholder }) {
  const wordLimit = 120;

  const [focus, setFocus] = useState(false);
  const [error, setError] = useState(false);
  const [value, setValue] = useState("");

  const textAreaValidation = (inputValue) => {
    if (inputValue?.length <= wordLimit) {
      setValue(inputValue);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <InputContainer focus={focus} error={error}>
      <Placeholder focus={focus} error={error} value={value}>
        {placeholder}
      </Placeholder>
      <TextAreaContainer>
        <TextareaStyled
          onFocus={() => {
            setFocus(true);
            if (value.length <= wordLimit) {
              setError(false);
            }
          }}
          onBlur={() => focus && setFocus(false)}
          value={value}
          onChange={(e) => textAreaValidation(e.target.value)}
        />
        <LetterCount focus={focus} error={error}>
          {wordLimit - value.length}
        </LetterCount>
      </TextAreaContainer>
    </InputContainer>
  );
}

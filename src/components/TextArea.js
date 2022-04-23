import React, { useEffect, useState } from "react";
import {
  ErrorText,
  InputContainer,
  LetterCount,
  Placeholder,
  TextAreaContainer,
  TextareaStyled,
} from "./styles/Input.styled";

const TextArea = ({
  name,
  placeholder,
  register,
  errorMessage,
  defaultValues,
}) => {
  const wordLimit = 120;

  const [focus, setFocus] = useState(false);
  const [error, setError] = useState(false);
  const [errorInput, setErrorInput] = useState("");
  const [value, setValue] = useState(defaultValues[name] || "");

  const textAreaValidation = (inputValue) => {
    if (inputValue?.length <= wordLimit) {
      setValue(inputValue);
      setError(false);
      setErrorInput("")
    } else {
      setValue(value);
      setError(true);
      setErrorInput("you reached word limit")
    }
  };

  useEffect(() => {
    if (value === "" || errorMessage) {
      setError(true);
    } else {
      setError(false);
    }
  }, [value, errorMessage]);

  return (
    <div>
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
            name={name}
            {...register(name, {
              // maxLength: 100,
              onChange: (e) => {
                textAreaValidation(e.target.value);
              },
            })}
          />
          <LetterCount focus={focus} error={error}>
            {wordLimit - value.length}
          </LetterCount>
        </TextAreaContainer>
      </InputContainer>
      <ErrorText>{errorMessage || errorInput}</ErrorText>
    </div>
  );
};

export default TextArea;

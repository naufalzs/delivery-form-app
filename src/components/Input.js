import React, { useEffect, useState } from "react";
import {
  CheckIconInput,
  ErrorIconInput,
  ErrorText,
  InputContainer,
  InputStyled,
  Placeholder,
} from "./styles/Input.styled";

const Input = ({
  name,
  type = "text",
  placeholder,
  disabled,
  errorMessage,
  register,
  dropship,
  defaultValues,
}) => {
  const [focus, setFocus] = useState(false);
  const [error, setError] = useState(false);
  const [value, setValue] = useState(defaultValues[name] || "");

  useEffect(() => {
    if (value === "" || errorMessage) {
      setError(true);
    } else {
      setError(false);
    }
  }, [value, errorMessage, focus]);

  return (
    <div>
      <InputContainer focus={focus} error={error} disabled={disabled}>
        <Placeholder
          focus={focus}
          error={error}
          value={value}
          disabled={disabled}
        >
          {placeholder}
        </Placeholder>
        {register ? (
          <InputStyled
            onFocus={() => setFocus(true)}
            onBlur={() => focus && setFocus(false)}
            value={name.includes("dropship") && !dropship ? "" : value}
            disabled={disabled}
            name={name}
            type={type}
            {...register(name, {
              onChange: (e) => setValue(e.target.value),
            })}
          />
        ) : (
          <InputStyled
            onFocus={() => setFocus(true)}
            onBlur={() => focus && setFocus(false)}
            value={name.includes("dropship") && !dropship ? "" : value}
            onChange={(e) => setValue(e.target.value)}
            disabled={disabled}
            name={name}
            type={type}
          />
        )}
        {!error ? (
          <CheckIconInput focus={focus} error={error} />
        ) : (
          <ErrorIconInput focus={focus} error={error} />
        )}
      </InputContainer>
      <ErrorText>{errorMessage}</ErrorText>
    </div>
  );
};

export default Input;

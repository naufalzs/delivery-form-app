import styled from "styled-components";
import { Check } from "@styled-icons/boxicons-regular/Check";
import { Close } from "@styled-icons/evaicons-solid/Close";

export const InputContainer = styled.div`
  width: max-content;
  background-color: ${({ theme, disabled }) => disabled && theme.colors.gray};
  border: black;
  width: 100%;
  border: 1px solid
    ${({ theme, focus, error }) =>
      !focus
        ? theme.colors.grayInput
        : error
        ? theme.colors.orange
        : theme.colors.green};
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const InputStyled = styled.input`
  position: relative;
  outline: none;
  border: none;
  background: none;
  width: 100%;
  height: 25px;
  font-weight: 700;
  padding: 10px;
  padding-top: 16px;
`;

export const Placeholder = styled.div`
  position: absolute;
  display: ${({ value, focus }) =>
    value === "" ? "block" : focus ? "block" : "none"};
  left: 14px;
  font-size: ${({ focus }) => (focus ? "12px" : "16px")};
  font-weight: ${({ focus }) => (focus ? "700" : "400")};
  color: ${({ theme, focus, error }) =>
    focus
      ? error
        ? theme.colors.orange
        : theme.colors.green
      : theme.colors.blackTransparent};
  top: ${({ focus }) => (focus ? "6px" : "16px")};
  transition: 0.2s ease all;
`;

export const CheckIconInput = styled(Check)`
  padding-right: 14px;
  display: ${({ focus }) => (!focus ? "none" : "block")};
  width: 25px;
  color: ${({ theme }) => theme.colors.green};
`;

export const ErrorIconInput = styled(Close)`
  padding-right: 14px;
  display: ${({ focus }) => (!focus ? "none" : "block")};
  width: 25px;
  color: ${({ theme }) => theme.colors.orange};
`;

export const TextAreaContainer = styled.div`
  padding: 10px;
  padding-top: 22px;
  width: 100%;
`;

export const TextareaStyled = styled.textarea.attrs({ rows: 4 })`
  font-family: inherit;
  position: relative;
  outline: none;
  border: none;
  background: none;
  width: 100%;
  font-weight: 700;
`;

export const LetterCount = styled.div`
  position: absolute;
  display: ${({ focus }) => (!focus ? "none" : "block")};
  top: 6px;
  right: 12px;
  font-size: 12px;
  color: ${({ theme, focus, error }) =>
    !focus
      ? theme.colors.grayInput
      : error
      ? theme.colors.orange
      : theme.colors.green};
  transition: 0.2s ease all;
`;

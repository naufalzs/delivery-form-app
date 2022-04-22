import styled from "styled-components";

export const InputStyled = styled.input`
  outline: none;
  padding: 14px;
  border: black;
  border: ${({ theme }) => `1px solid ${theme.colors.grayInput}`};
  :focus {
    background-color: ${({ theme }) => theme.colors.greenTransparent};
    border-color: ${({ theme }) => theme.colors.greenTransparent};
  }
`;

export const TextareaStyled = styled.textarea`
  font-family: inherit;
  outline: none;
  padding: 14px;
  border: ${({ theme }) => `1px solid ${theme.colors.grayInput}`};
  :focus {
    background-color: ${({ theme }) => theme.colors.greenTransparent};
    border-color: ${({ theme }) => theme.colors.greenTransparent};
  }
`;

import styled from "styled-components";

export const ButtonNext = styled.button`
  outline: none;
  border: none;
  background-color: ${({ theme }) => theme.colors.orange};
  width: 100%;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

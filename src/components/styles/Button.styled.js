import styled from "styled-components";

export const ButtonNext = styled.button`
  outline: none;
  border: none;
  background-color: ${({ theme, disableStyle }) =>
    disableStyle ? theme.colors.gray : theme.colors.orange};
  width: 100%;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ theme, disableStyle }) =>
    disableStyle ? theme.colors.grayDisabled : "white"};
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: 16px;
  }
`;

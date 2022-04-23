import styled from "styled-components";
import { Check } from "@styled-icons/boxicons-regular/Check";

export const CardOptionStyled = styled.div`
  height: 44px;
  padding: 8px;
  background-color: ${({ theme, active }) =>
    active && theme.colors.greenTransparent};
  border: 1px solid ${({ theme }) => theme.colors.grayInput};
  color: ${({ theme, active }) =>
    active ? "black" : theme.colors.blackTransparent};
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  :hover {
    background-color: ${({ theme }) => theme.colors.greenTransparent};
    border: 1px solid ${({ theme }) => theme.colors.greenTransparent};
    color: black;
  }
  font-size: 14px;
  div {
    font-weight: bold;
    p {
      font-weight: 400;
      white-space: nowrap;
      margin-bottom: 2px;
    }
  }
`;

export const CheckIcon = styled(Check)`
  display: ${({ active }) => (!active ? "none" : "block")};
  width: 22px;
  color: ${({ theme }) => theme.colors.green};
`;

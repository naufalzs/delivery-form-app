import styled from "styled-components";
import { Check2 } from "@styled-icons/bootstrap/Check2";

export const CardOptionStyled = styled.div`
  height: 44px;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.colors.grayInput};
  color: ${({ theme }) => theme.colors.blackTransparent};
  display: flex;
  justify-content: space-between;
  align-items: center;
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
    }
  }
`;

export const CheckIcon = styled(Check2)`
  width: 16px;
  color: ${({ theme }) => theme.colors.green};
`;

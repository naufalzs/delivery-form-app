import styled from "styled-components";
import {Checkmark} from "@styled-icons/evaicons-solid/Checkmark"

export const CheckboxContainer = styled.div`
  width: 14px;
  height: 14px;
  margin-right: 8px;
  border: 2px solid
    ${({ theme, checked }) =>
      checked ? theme.colors.green : theme.colors.blackTransparent};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CheckIconCheckbox = styled(Checkmark)`
  width: 14px;
  display: ${({ checked }) => (!checked ? "none" : "block")};
  color: ${({ theme }) => theme.colors.green};
`;

import styled from "styled-components";
import { ArrowLeftShort } from "@styled-icons/bootstrap/ArrowLeftShort";

export const BackLinkContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.blackSoft};
  p {
    font-size: 14px;
  }
`;

export const ArrowBackLink = styled(ArrowLeftShort)`
  width: 30px;
  margin-right: 4px;
  cursor: pointer;
`;

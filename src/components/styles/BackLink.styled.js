import styled from "styled-components";
import { ArrowLeftShort } from "@styled-icons/bootstrap/ArrowLeftShort";

export const BackLinkContainer = styled.div`
width: max-content;
  display: flex;
  align-items: center;
  margin-top: 20px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.blackSoft};
  p {
    font-size: 14px;
  }
`;

export const ArrowBackLink = styled(ArrowLeftShort)`
  width: 30px;
  margin-right: 4px;
`;

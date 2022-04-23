import styled from "styled-components";
import { KeyboardArrowRight } from "@styled-icons/material-rounded/KeyboardArrowRight";

export const StepperPosition = styled.div`
  position: absolute;
  top: -35px;
  width: 942px;
  display: flex;
  justify-content: center;
`;

export const StepperContainer = styled.div`
  padding: 30px 40px 30px 40px;
  height: 10px;
  border-radius: 9999px;
  background-color: ${({ theme }) => theme.colors.peach};
  color: ${({ theme }) => theme.colors.orange};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CircleStep = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${({ theme, active }) =>
    active ? theme.colors.orange : theme.colors.orangeTransparent};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    color: ${({ theme, active }) => (active ? "#ffffff" : theme.colors.orange)};
  }
`;

export const TextStep = styled.p`
  margin-left: 12px;
  color: ${({ theme }) => theme.colors.orange};
  font-size: 18px;
  /* line-height: 28px; */
`;

export const ArrowStep = styled(KeyboardArrowRight)`
  color: ${({ theme }) => theme.colors.orange};
  margin: 4px 24px 0 24px;
  width: 28px;
  height: 28px;
`;

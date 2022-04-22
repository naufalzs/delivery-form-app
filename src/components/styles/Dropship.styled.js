import styled from "styled-components";

export const DropshipContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  p {
    color: black;
    font-size: 12px;
  }
`;

export const DropshipCheckbox = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  background-color: ${({ theme }) => theme.colors.green};
`;

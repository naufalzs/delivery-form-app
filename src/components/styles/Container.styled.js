import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.peach};
  display: flex;
  justify-content: center;
  align-items: center;
`;

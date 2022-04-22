import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.peach};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainContent = styled.div`
  height: 85%;
  margin-top: 32px;
  display: grid;
  grid-template-columns: 70% auto;
`;

export const ContentLeftStyled = styled.div`
  padding-right: 20px;
`;

export const ContentRightStyled = styled.div`
  padding-left: 20px;
  border-left: ${({ theme }) => `1px solid ${theme.colors.orangeTransparent}`};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const FormContainer = styled.form`
  margin-top: 16px;
  display: grid;
  grid-template-columns: 60% auto;
  column-gap: 32px;
  row-gap: 10px;
`;

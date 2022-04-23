import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.peach};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainCard = styled.div`
  height: 510px;
  max-height: 550px;
  width: 948px;
  position: relative;
  background-color: #ffffff;
  padding: 20px 20px 20px 32px;
  box-shadow: 0 8px 10px #ff8a0010, 0 8px 10px #ff8a0010, 5px 0 30px #ff8a0005,
    -5px 0 30px #ff8a0005;
`;

export const MainContent = styled.div`
  height: 85%;
  margin-top: ${({ extraMargin }) => extraMargin ? "82px" : "32px"};
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

export const ChooserContainer = styled.div`
  margin: 40px 0 56px 0;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  column-gap: 8px;
`;

export const FinishContainer = styled.div`
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
`;

export const DropshipContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  p {
    color: black;
    font-size: 12px;
  }
`;

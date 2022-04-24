import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.peach};
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    height: 110vh;
  } ;
`;

export const MainCard = styled.div`
  height: 510px;
  width: 948px;
  position: relative;
  background-color: #ffffff;
  padding: 20px 20px 20px 32px;
  box-shadow: 0 8px 10px #ff8a0010, 0 8px 10px #ff8a0010, 5px 0 30px #ff8a0005,
    -5px 0 30px #ff8a0005;
  transition: 0.2s ease all;
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    height: max-content;
    padding: 16px;
    margin: 0 12px;
  } ;
`;

export const MainContent = styled.div`
  height: 85%;
  margin-top: ${({ extraMargin }) => (extraMargin ? "82px" : "32px")};
  display: grid;
  grid-template-columns: 70% auto;
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    display: block;
  }
`;

export const ContentLeftStyled = styled.div`
  padding-right: 20px;
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding-right: 0px;
  }
`;

export const ContentRightStyled = styled.div`
  padding-left: 20px;
  border-left: ${({ theme }) => `1px solid ${theme.colors.orangeTransparent}`};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    margin-top: 20px;
    padding-top: 10px;
    padding-left: 0px;
    border: none;
    border-top: ${({ theme }) =>
      `1.5px solid ${theme.colors.orangeTransparent}`};
    height: max-content;
  }
`;

export const FormContainer = styled.form`
  margin-top: 16px;
  display: grid;
  grid-template-columns: 60% auto;
  column-gap: 32px;
  row-gap: 10px;
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const ChooserContainer = styled.div`
  margin: 40px 0 56px 0;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  column-gap: 8px;
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
  margin: 20px 0;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  row-gap: 8px;
  }
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

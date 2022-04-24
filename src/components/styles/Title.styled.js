import styled from "styled-components";

export const TitleContainer = styled.div`
  height: max-content;
  display: flex;
  justify-content: space-between;
  position: relative;
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    display: block;
  }
`;

export const TitleText = styled.h1`
  position: relative;
  font-size: 36px;
  color: ${({ theme }) => theme.colors.orange};
  font-weight: bold;
  letter-spacing: 0.025em;
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
  font-size: 32px;
    margin-bottom: 16px;
  }
`;

export const TitleShadow = styled.div`
  position: absolute;
  width: 300px;
  height: 8px;
  bottom: 2px;
  background-color: ${({ theme }) => theme.colors.gray};
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    width: 260px;
    bottom: inherit;
    top: 28px;
  }
`;

import styled from "styled-components";

export const SummaryInfo = styled.div`
  h2 {
    color: ${({ theme }) => theme.colors.orange};
    letter-spacing: 0.025em;
    font-size: 24px;
    font-weight: bold;
  }
  p {
    margin-top: 8px;
    color: ${({ theme }) => theme.colors.blackTransparent};
    font-size: 12px;
  }
`;

export const SummarySeparator = styled.div`
  margin: 16px 0;
  width: 70px;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.gray};
`;

export const OptionDetails = styled.div`
  font-weight: bold;
  h3 {
    font-size: 12px;
  }
  p {
    margin-top: 2px;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.green};
  }
`;

export const OptionPrice = styled.div`
  font-size: 12px;
  margin-top: 4px;
  display: flex;
  justify-content: space-between;
  p {
    font-weight: bold;
  }

  p:first-of-type {
    font-weight: 400;
    color: ${({ theme }) => theme.colors.blackTransparent};
    span {
      font-weight: bold;
    }
  }
`;

export const TotalPrice = styled.div`
  margin: ${({ step }) => (step === 3 ? "24px 0 12px 0" : "24px 0")};
  font-weight: bold;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.orange};
  display: flex;
  justify-content: space-between;
`;

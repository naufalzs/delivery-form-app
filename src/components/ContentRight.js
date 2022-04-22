import React from "react";
import { ButtonNext } from "./styles/Button.styled";
import { ContentRightStyled } from "./styles/Container.styled";
import {
  OptionDetails,
  OptionPrice,
  SummaryInfo,
  SummarySeparator,
  TotalPrice,
} from "./styles/Summary.styled";

export default function ContentRight() {
  return (
    <ContentRightStyled>
      <div>
        <SummaryInfo>
          <h2>Summary</h2>
          <p>10 items purchased</p>
        </SummaryInfo>
        <SummarySeparator />
        <OptionDetails>
          <h3>Delivery Estimation</h3>
          <p>today by GO-SEND</p>
        </OptionDetails>
      </div>
      <div>
        <OptionPrice>
          <p>
            <span>JNE</span> Shipment
          </p>
          <p>9,000</p>
        </OptionPrice>
        <TotalPrice>
          <p>Total</p>
          <p>505,999</p>
        </TotalPrice>
        <ButtonNext>Continue to Payment</ButtonNext>
      </div>
    </ContentRightStyled>
  );
}

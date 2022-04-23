import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ButtonNext } from "./styles/Button.styled";
import { ContentRightStyled } from "./styles/Container.styled";
import {
  OptionDetails,
  OptionPrice,
  SummaryInfo,
  SummarySeparator,
  TotalPrice,
} from "./styles/Summary.styled";
import NumberFormat from "react-number-format";
import { nextStep } from "../redux/step/stepAction";
import {
  chooseShipment,
  genOrderID,
  setButton,
} from "../redux/user/userAction";
import RandExp from "randexp";

export default function ContentRight() {
  const activeStep = useSelector((state) => state.step.activeStep);
  const dropship = useSelector((state) => state.user.dropship);
  const choosenShipment = useSelector((state) => state.user.shipment);
  const choosenPayment = useSelector((state) => state.user.payment);
  const buttonNextState = useSelector((state) => state.user.button);

  const {
    provider: courier,
    timeEstimation: timeDelivery,
    fee: courierFee,
  } = choosenShipment;
  const { provider: bank } = choosenPayment;

  const costGoods = 500000;
  const dropshipFee = 5900;
  const totalFee = costGoods + (dropship ? dropshipFee : 0) + (courierFee || 0);

  // const [nextButton, setNextButton] = useState(buttonNextState);
  const dispatch = useDispatch();

  const handleNextButton = () => {
    if (activeStep === 2) {
      dispatch(genOrderID());
    }
    dispatch(nextStep());
  };
  // console.log(buttonNextState);
  // console.log(nextButton)

  useEffect(() => {
    if (choosenPayment) {
      // setNextButton(true);
      dispatch(setButton(true));
    }
  }, [choosenPayment]);

  const handleTextButton = () => {
    switch (activeStep) {
      case 1:
        return "Continue to Payment";
      case 2:
        return `${
          !choosenShipment
            ? "Choose shipment first"
            : choosenPayment
            ? `Pay with ${bank}`
            : "Choose payment first"
        }`;
      case 3:
        return "";
      default:
        return;
    }
  };

  return (
    <ContentRightStyled>
      <div>
        <SummaryInfo>
          <h2>Summary</h2>
          <p>10 items purchased</p>
        </SummaryInfo>
        {choosenShipment && (
          <>
            <SummarySeparator />
            <OptionDetails>
              <h3>Delivery Estimation</h3>
              <p>
                {timeDelivery} by {courier}
              </p>
            </OptionDetails>
          </>
        )}
        {choosenShipment && (
          <>
            <SummarySeparator />
            <OptionDetails>
              <h3>Payment Method</h3>
              <p>{bank}</p>
            </OptionDetails>
          </>
        )}
        {/* <OptionDetails>
          <h3>Delivery Estimation</h3>
          <p>today by GO-SEND</p>
        </OptionDetails> */}
      </div>
      <div>
        <OptionPrice>
          <p>Cost of goods</p>
          <p>
            <NumberFormat
              value={costGoods}
              displayType={"text"}
              thousandSeparator={true}
              prefix={`Rp `}
              className="font-bold"
            />
          </p>
        </OptionPrice>
        {dropship && (
          <OptionPrice>
            <p>Dropshipping Fee</p>
            <p>
              <NumberFormat
                value={dropshipFee}
                displayType={"text"}
                thousandSeparator={true}
                prefix={`Rp `}
                className="font-bold"
              />
            </p>
          </OptionPrice>
        )}
        {choosenShipment && (
          <OptionPrice>
            <p>
              <span>{courier}</span> Shipment
            </p>
            <p>
              <NumberFormat
                value={courierFee}
                displayType={"text"}
                thousandSeparator={true}
                prefix={`Rp `}
                className="font-bold"
              />
            </p>
          </OptionPrice>
        )}

        {/* <OptionPrice>
          <p>
            <span>JNE</span> Shipment
          </p>
          <p>9,000</p>
        </OptionPrice> */}
        <TotalPrice step={activeStep}>
          <p>Total</p>
          <p>
            <NumberFormat
              value={totalFee}
              displayType={"text"}
              thousandSeparator={true}
              prefix={`Rp `}
              className="font-bold"
            />
          </p>
          {/* <p>505,999</p> */}
        </TotalPrice>
        {/* <ButtonNext>Continue to Payment</ButtonNext> */}
        {activeStep !== 3 && (
          <ButtonNext
            type={activeStep === 1 ? "submit" : "button"}
            form="form_delivery"
            onClick={
              activeStep === 2 && choosenPayment && chooseShipment
                ? handleNextButton
                : undefined
            }
            disableStyle={!buttonNextState}
          >
            {handleTextButton()}
          </ButtonNext>
        )}
      </div>
    </ContentRightStyled>
  );
}

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { choosePayment, chooseShipment } from "../redux/user/userAction";
import CardOption from "./CardOption";
import { ChooserContainer } from "./styles/Container.styled";
import Title from "./Title";

export default function Step2() {
  const shipmentOptions = [
    {
      provider: "GO-SEND",
      timeEstimation: "today",
      fee: 15000,
      id: 1,
    },
    {
      provider: "JNE",
      timeEstimation: "2 days",
      fee: 9000,
      id: 2,
    },
    {
      provider: "Personal Courier",
      timeEstimation: "1 day",
      fee: 29000,
      id: 3,
    },
  ];

  const paymentOptions = [
    {
      provider: "e-Wallet",
      balance: 1500000,
      id: 1,
    },
    {
      provider: "Bank Transfer",
      balance: null,
      id: 2,
    },
    {
      provider: "Virtual Account",
      balance: null,
      id: 3,
    },
  ];

  const choosenShipment = useSelector((state) => state.user.shipment);
  const choosenPayment = useSelector((state) => state.user.payment);
  const dispatch = useDispatch();

  const handleShipment = (shipment) => {
    dispatch(chooseShipment(shipment));
  };

  const handlePayment = (payment) => {
    dispatch(choosePayment(payment));
  };
  return (
    <>
      <Title textTitle="Shipments" />
      <ChooserContainer>
        {shipmentOptions.map((courier, i) => (
          <CardOption
            key={courier.provider}
            onClick={() => handleShipment(courier)}
            text={courier.provider}
            amount={courier.fee}
            active={courier.id === choosenShipment?.id ? true : false}
          />
        ))}
      </ChooserContainer>
      <Title textTitle="Payment" />
      <ChooserContainer>
        {paymentOptions.map((bank, i) => (
          <CardOption
            key={bank.provider}
            onClick={() => handlePayment(bank)}
            text={bank.provider}
            amount={bank.balance}
            active={bank.id === choosenPayment?.id ? true : false}
          />
        ))}
      </ChooserContainer>
    </>
  );
}

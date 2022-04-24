import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "./Input";
import { FormContainer } from "./styles/Container.styled";
import TextArea from "./TextArea";
import Title from "./Title";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { fillForm, setButton } from "../redux/user/userAction";
import { nextStep } from "../redux/step/stepAction";
import {
  formValidation,
  formValidationDropship,
} from "../utils/ValidationSchema";

export default function Step1() {
  const formState = useSelector((state) => state.user.form);
  const dropshipState = useSelector((state) => state.user.dropship);
  const dispatch = useDispatch();

  const defaultValues = {
    email: formState?.email || "",
    phone_number: formState?.phone_number || "",
    address: formState?.address || "",
    dropshipper_name: formState?.dropshipper_name || "",
    dropshipper_phone_number: formState?.dropshipper_phone_number || "",
  };

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(
      !dropshipState ? formValidation : formValidationDropship
    ),
    mode: "all",
  });

  useEffect(() => {
    if (isValid) {
      console.log("3 1");
      dispatch(setButton(true));
    } else {
      console.log("3 2");
      dispatch(setButton(false));
    }
  }, [dispatch, dropshipState, isValid]);
  const onSubmit = (data) => {
    const formSubmitDropship = {
      ...data,
      dropshipper_name: "",
      dropshipper_phone_number: "",
    };
    console.log(data, formSubmitDropship)
    dispatch(fillForm(dropshipState? formSubmitDropship : data));
    // console.log(data)
    // dispatch(fillForm(data))
    dispatch(setButton(false));
    dispatch(nextStep());
  };
  return (
    <>
      <Title textTitle="Delivery details" checkbox />
      <FormContainer id="form_delivery" onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="email"
          placeholder="Email"
          register={register}
          errorMessage={errors?.email?.message}
          defaultValues={defaultValues}
        />
        <Input
          name="dropshipper_name"
          placeholder="Dropshipper name"
          register={register}
          disabled={!dropshipState}
          dropship={dropshipState}
          errorMessage={errors?.dropshipper_name?.message}
          defaultValues={defaultValues}
        />
        <Input
          name="phone_number"
          placeholder="Phone Number"
          register={register}
          errorMessage={errors?.phone_number?.message}
          defaultValues={defaultValues}
        />
        <Input
          name="dropshipper_phone_number"
          placeholder="Dropshipper phone number"
          register={register}
          disabled={!dropshipState}
          dropship={dropshipState}
          errorMessage={errors?.dropshipper_phone_number?.message}
          defaultValues={defaultValues}
        />
        <TextArea
          name="address"
          placeholder="Delivery Address"
          register={register}
          errorMessage={errors?.address?.message}
          defaultValues={defaultValues}
        />
      </FormContainer>
    </>
  );
}

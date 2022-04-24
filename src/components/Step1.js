import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "./Input";
import { FormContainer } from "./styles/Container.styled";
import TextArea from "./TextArea";
import Title from "./Title";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { fillForm, setButton } from "../redux/user/userAction";
import { nextStep } from "../redux/step/stepAction";

export default function Step1() {
  const formState = useSelector((state) => state.user.form);
  const dropshipState = useSelector((state) => state.user.dropship);
  const dispatch = useDispatch();

  const formValidation = yup.object().shape({
    email: yup
      .string()
      .required("email required")
      .email("email format not valid"),
    phone_number: yup
      .string()
      .required("phone number required")
      .matches(/^[0-9-+()]*$/, "phone number not valid")
      .min(6, "must between 6 - 20 digits")
      .max(20, "must between 6 - 20 digits"),
    address: yup.string().required("address required"),
  });

  const formValidationDropship = yup.object().shape({
    email: yup
      .string()
      .required("email required")
      .email("email format not valid"),
    phone_number: yup
      .string()
      .required("phone number required")
      .matches(/^[0-9-+()]*$/, "phone number not valid")
      .min(6, "must between 6 - 20 digits")
      .max(20, "must between 6 - 20 digits"),
    address: yup.string().required("address required"),
    dropshipper_name: yup.string().required("dropshipper name required"),
    dropshipper_phone_number: yup
      .string()
      .required("phone number required")
      .matches(/^[0-9-+()]*$/, "phone number not valid")
      .min(6, "must between 6 - 20 digits")
      .max(20, "must between 6 - 20 digits"),
  });

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
    watch,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(
      !dropshipState ? formValidation : formValidationDropship
    ),
    mode: "all",
  });
  // const watchList = ["email", "phone_number", "address"];
  console.log(watch());

  useEffect(() => {
    const watchList = ["email", "phone_number", "address"];
    if (
      !dropshipState &&
      watch(watchList).filter((item) => item !== "").length === 3
    ) {
      dispatch(setButton(true));
    } else {
      dispatch(setButton(false));
    }

    if (isValid) {
      dispatch(setButton(true));
    } else {
      dispatch(setButton(false));
    }
  }, [dispatch, dropshipState, watch, isValid]);

  const onSubmit = (data) => {
    dispatch(fillForm(data));
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

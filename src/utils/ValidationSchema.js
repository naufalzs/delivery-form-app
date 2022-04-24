import * as yup from "yup";

export const formValidation = yup.object().shape({
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

export const formValidationDropship = yup.object().shape({
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

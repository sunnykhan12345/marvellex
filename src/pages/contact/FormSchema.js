
import * as yup  from "yup"

export const FormSchema = yup.object({
    name:yup.string().min(3, "To Short").max(20, "To Long").required("Name is Must"),
    email:yup.string().email("Invalid Email").required("Email is required"),
    // phoneNo:yup.number().required(),
    phoneNo:yup.string().matches(/^[0-9]{11}$/, 'Phone number must be 11 digits').required("Phone Number is Required"),
    address:yup.string().required()
})
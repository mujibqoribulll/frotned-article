import * as yup from "yup";

export const schemaRegister = yup.object({
    username: yup.string().required(),
    password: yup.string().min(8).required(),
    role: yup.string().required(),
    check: yup.boolean().required(),
});

export const schemaLogin = yup.object({
    username: yup.string().required(),
    password: yup.string().min(8).required(),
});



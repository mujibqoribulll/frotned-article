import * as yup from "yup";
export const schemaArticle = yup.object({
    keyword: yup.string().min(3)
});

export const schemaArticleForm = yup.object({
    title: yup.string().required(),
    categories: yup
        .object({
            value: yup.mixed().required(),
            label: yup.string().required(),
        })
        .required('Categories required')
        .nullable(), // jika form awalnya kosong
    description: yup.string()
});
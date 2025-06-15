import * as yup from "yup";
export const schemaArticle = yup.object({
    keyword: yup.string().min(3)
});

export const schemaArticleForm = yup.object({
    title: yup.string().required(),
    categories: yup.string().required(),
    description: yup.string()
});
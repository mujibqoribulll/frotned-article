import { LoadingTypeProps } from "./auth";

interface DataArticle {
    title: string;
    content: string;
    categoryId: string;
    categories?: string;
    description?: string;
}

interface TypePagination {
    limit: number;
    page: number;
    total: number;

}

interface IArticle {
    article: {
        loading: LoadingTypeProps;
        message: string;
        data: any
    };
    pagination: TypePagination;
    categories: {
        loading: LoadingTypeProps;
        message: string;
        data: any
    }
}

interface ICardArticle {

}

interface IParam {
    title: string
    page: number
}


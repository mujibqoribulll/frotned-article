import { LoadingTypeProps } from "./auth";

interface DataArticle {
    title: string;
    content: string;
    categoryId: string;
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
    }
    pagination: TypePagination

}


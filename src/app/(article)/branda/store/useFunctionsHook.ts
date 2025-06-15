
import { schemaArticle, schemaArticleForm } from "@/scheme/schemaArticle"
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { DataArticle, IParam } from "@/types/articles"
import { yupResolver } from "@hookform/resolvers/yup"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { shallowEqual } from "react-redux"
import { getArticleThunk, postArticleThunk } from "./articleThunk"

export const useFunctionsHook = () => {

    const { article, pagination } = useAppSelector(state => state.article, shallowEqual)
    const core = useAppSelector(state => state.auth.core, shallowEqual)
    console.log('core', core)
    const {
        register,
        watch,
        formState: { errors, isValid, isLoading },
    } = useForm({
        mode: 'onChange',
        resolver: yupResolver(schemaArticle),
    });

    const {
        register: registerForm,
        handleSubmit,
        reset,
        control,
        formState: { errors: errorForm, isValid: isValidForm, isLoading: isLoadingForm },
    } = useForm({
        mode: 'onChange',
        resolver: yupResolver(schemaArticleForm),
    });

    const dispatch = useAppDispatch()
    const route = useRouter();
    const searchParams = useSearchParams();

    const watchKeyword = watch('keyword');
    const page = Number(searchParams.get('page')) || 1;
    const limit = 10;
    const total = 40;
    const totalPages = Math.ceil(total / limit);
    const [modal, setModal] = useState<IModalDataProps>({
        type: '',
        visible: false,
        data: {
            id: ''
        },
    });

    const prevPage = page > 1 ? page - 1 : null;
    const nextPage = page < totalPages ? page + 1 : null;

    const isPrevDisabled = page <= 1;
    const isNextDisabled = page >= totalPages;

    const handlePrev = () => {
        if (prevPage) {
            route.push(`?page=${prevPage}&title=${watchKeyword}`);
        }
    };

    const handleNext = () => {
        if (nextPage) {
            route.push(`?page=${nextPage}&title=${watchKeyword}`);
        }
    };

    const toggleSetModal = (type: Modaltype, data: Datatypes) => {
        setModal((prevState) => ({
            ...prevState,
            type,
            visible: !prevState.visible,
            data: { id: data?.id }
        }));
    }


    const onSubmit = async (data: DataArticle) => {
        let payload = {
            title: `${data?.title}`,
            categoryId: `${data?.categories}`,
            content: `${data?.description}`

        }
        let result = await dispatch(postArticleThunk(payload))
        if (postArticleThunk.fulfilled.match(result)) {
            setModal((prevState) => ({
                ...prevState,
                type: undefined,
                visible: !prevState.visible,
                data: { id: '' }
            }));
        }

    }

    useEffect(() => {
        const delay = setTimeout(() => {

            const query = new URLSearchParams();
            if (watchKeyword) query.set('title', watchKeyword);
            query.set('page', '1');
            query.set('limit', '10');
            route.push(`?${query.toString()}`);

            // Fetch data 
            let params: IParam = {
                title: `${watchKeyword}`,
                page,
            };
            dispatch(getArticleThunk(params));
        }, 700);

        return () => clearTimeout(delay);
    }, [watchKeyword]);

    useEffect(() => {
        const params: IParam = {
            title: `{watchKeyword}`,
            page,
        };
        dispatch(getArticleThunk(params));
    }, [page]);





    return {
        article, modal, pagination, control, isPrevDisabled, isNextDisabled, formState: { errors, isValid, isLoading }, errorForm, function: { register, handleNext, handlePrev, toggleSetModal, registerForm, handleSubmit, reset, onSubmit }
    }
}
import { schemaLogin } from "@/scheme/schemaLogin";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { ILogin } from "@/types/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { postLoginThunk } from "../../login/store/authThunk";

export const useFunctionHook = () => {
    const {
        register,
        getValues,
        handleSubmit,
        formState: { errors, isValid, isLoading },
    } = useForm({
        mode: 'onChange',
        resolver: yupResolver(schemaLogin),
    });
    const route = useRouter();
    const dispatch = useAppDispatch()
    const stateLogin = useAppSelector(state => state.auth.login)


    const onSubmit = async (data: ILogin) => {
        try {
            let result = await dispatch(postLoginThunk(data))
            if (postLoginThunk.fulfilled.match(result)) {
                route.push('/branda')
            }

        } catch (error) {

        }
    }

    return { stateLogin, formState: { errors, isValid, isLoading }, function: { register, handleSubmit, onSubmit, getValues } }
}
import { schemaRegister } from "@/scheme/schemaLogin";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { IRegister } from "@/types/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { postRegisterThunk } from "../../login/store/authThunk";

export const useFunctionHook = () => {
    const {
        register,
        getValues,
        control,
        handleSubmit,
        formState: { errors, isValid, isLoading },
    } = useForm({
        mode: 'onChange',
        resolver: yupResolver(schemaRegister),
    });
    const route = useRouter();
    const dispatch = useAppDispatch()
    const stateRegister = useAppSelector(state => state.auth.register)

    const onSubmit = async (data: IRegister) => {
        try {
            let result = await dispatch(postRegisterThunk(data))
            if (postRegisterThunk.fulfilled.match(result)) {
                route.push('/login')
            }

        } catch (error) {

        }
    }

    return { stateRegister, control, formState: { errors, isValid, isLoading }, function: { register, handleSubmit, onSubmit, getValues } }
}
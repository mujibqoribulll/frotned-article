export type LoadingTypeProps = 'idle' | 'succeeded' | 'pending' | 'failed'

interface IAuthProps {
    loading: LoadingTypeProps;
    data: any,
    message: string
}

interface IAuthInitialState {
    email: string;
    password: string;
}

interface ICore {
    auth: boolean;
    me: any;
    token: string;
    role: string;
}

interface IRegister {
    username: string;
    password: string;
    role: string;
}

interface ILogin {
    username: string;
    password: string;
}
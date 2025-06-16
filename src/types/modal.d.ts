interface IModalFormProps {
    onPress?: () => void;
    onCancel: () => void;
    visible: boolean;
    onSubmit: any
    register: any
    errors: any
    handleSubmit: any
    control: any
    loading: boolean
    modalType: string
}

interface IModalDataProps {
    type: Modaltype;
    visible: boolean;
    data?: Datatypes;
}

type Modaltype = 'add-article' | 'update-article' | undefined | ''

type Datatypes = {
    id: string | number
}

interface IModalAlertProps {
    onPress: () => void;
    onCancel: () => void;
    visible: string | any;
}
interface IModalFormProps {
    onPress: () => void;
    onCancel: () => void;
    visible: boolean;
    data?: Datatypes;
    onSubmit: (data: Datatypes) => void
    register: any
    errors: any
    handleSubmit: any
    control: any
    loading: boolean
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
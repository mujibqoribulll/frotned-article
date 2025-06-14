type TypeButton = 'reset' | 'submit' | 'button'

interface IButtonText {
    title: string;
    onPress?: () => void;
    type: TypeButton;
    disable: boolean;
    loading: boolean;
}

interface IButtonIcon {
    icon: React.ReactNode;
    onPress: () => void
}
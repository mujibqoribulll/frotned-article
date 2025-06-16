
type TypeButton = 'reset' | 'submit' | 'button'

interface IButtonText {
    title: string;
    onPress?: () => void;
    type: TypeButton;
    disable?: boolean;
    loading?: boolean;
    styleContainer?: string;
    styleText?: string
}

interface IButtonIcon {
    icon: React.ReactNode;
    onPress: () => void
    styleContainer?: string
}
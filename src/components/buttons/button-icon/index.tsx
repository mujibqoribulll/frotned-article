const ButtonIcon = (props: IButtonIcon) => {
  const { icon, onPress } = props;
  return (
    <button className="cursor-pointer " onClick={onPress}>
      {icon}
    </button>
  );
};

export default ButtonIcon;

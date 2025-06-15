const ButtonIcon = (props: IButtonIcon) => {
  const { icon, onPress, styleContainer } = props;
  return (
    <button className={`${styleContainer} cursor-pointer `} onClick={onPress}>
      {icon}
    </button>
  );
};

export default ButtonIcon;

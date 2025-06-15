const ButtonText = (props: IButtonText) => {
  const {
    title,
    onPress,
    type,
    disable = false,
    loading,
    styleContainer,
    styleText,
  } = props;
  return (
    <button
      className={`${styleContainer} bg-gray-600 w-full  ${
        !disable ? 'cursor-pointer' : ''
      } p-2 rounded-md text-white font-semibold flex items-center justify-center gap-x-3`}
      onClick={onPress}
      type={type}
      disabled={disable}
    >
      <span className={`${styleText}`}>{title}</span>
      {loading && (
        <div className="w-6 h-6 border-4 border-x-purple-500 rounded-full animate-spin" />
      )}
    </button>
  );
};

export default ButtonText;

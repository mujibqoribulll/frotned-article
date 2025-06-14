import { FaCheck } from 'react-icons/fa6';
const Checked = (props: IChecked) => {
  const { isChecked, onPress } = props;
  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={onPress}
        className="hidden"
      />
      <div
        className={`w-[20px] h-[20px] rounded-sm p-[2px] flex items-center justify-center ${
          isChecked ? 'bg-purple-500' : 'border border-purple-500'
        }  p-[2px] rounded-sm  cursor-pointer`}
      >
        {isChecked && <FaCheck color="white" size={12} />}
      </div>
    </label>
  );
};

export default Checked;

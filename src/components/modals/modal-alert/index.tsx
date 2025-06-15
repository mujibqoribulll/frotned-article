import ButtonText from '@/components/buttons/button-text';
import Image from 'next/image';

const ModalAlert = (props: IModalAlertProps) => {
  const { visible, onCancel, onPress } = props;

  if (visible?.id === '') {
    document.body.classList.remove('overflow-hidden');
    return null;
  } else {
    document.body.classList.add('overflow-hidden');
  }

  return (
    <div className="inset-0 fixed bg-black/60 flex justify-center items-center h-screen">
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white max-w-sm rounded-lg flex flex-col justify-center items-center "
      >
        <div className="p-5 flex flex-col justify-center items-center gap-y-5">
          <Image
            src="/images/delete.svg"
            alt="delete-img"
            width={300}
            height={200}
            layout="responsive"
            className="items-center"
          />
          <h2 className="text-base font-sans font-semibold text-center">
            Are you sure you want to delete this?
          </h2>
          <p className="text-sm text-gray-400 font-sans text-center">
            This action cannot be undone. The item will be permanently removed.
          </p>

          <div className="flex justify-center items-center gap-x-2">
            <ButtonText
              type="button"
              title="Cancel"
              onPress={onCancel}
              styleContainer="border border-gray-500 bg-white px-8"
              styleText="text-black"
            />
            <ButtonText
              type="button"
              title="Yes"
              onPress={onPress}
              styleContainer="border border-red-500 bg-white px-10"
              styleText="text-red-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalAlert;

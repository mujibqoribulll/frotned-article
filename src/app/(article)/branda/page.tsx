'use client';
import ButtonText from '@/components/buttons/button-text';
import CardArticle from '@/components/cards/card-article';
import ModalForm from '@/components/modals/modal-form';
// import SelectArticle from '@/components/select-with-pagination';
import { BsSearch } from 'react-icons/bs';
import { useFunctionsHook } from './store/useFunctionsHook';

const Branda = (props: any) => {
  const {} = props;
  const {
    article,
    pagination,
    isNextDisabled,
    isPrevDisabled,
    modal,
    errorForm,
    control,
    formState: { errors, isLoading, isValid },
    function: {
      register,
      handleNext,
      handlePrev,
      toggleSetModal,
      handleSubmit,
      registerForm,
      reset,
      onSubmit,
    },
  } = useFunctionsHook();

  const onPressModal = (type: any, data: Datatypes) => {
    toggleSetModal(type, data);
  };

  return (
    <section className="container mx-auto">
      <div className=" flex flex-col justify-between items-center gap-y-5 my-8">
        <div className="h-60 bg-amber-700 w-full">
          <h1>space</h1>
        </div>
        <div className="flex items-center gap-x-5 w-full">
          <div className="w-full">
            <div
              className={`flex justify-start items-center gap-x-3 border-1 ${
                errors?.keyword ? 'border-red-500 ' : 'border-purple-500 '
              } rounded-lg px-3`}
            >
              <BsSearch size={19} />
              <input
                type="text"
                placeholder="Search..."
                className="outline-none bg-transparent w-full p-2"
                {...register('keyword')}
              />
            </div>

            {errors?.keyword?.message && (
              <p className="text-sm text-red-500 font-sans">
                {errors?.keyword?.message}
              </p>
            )}
          </div>
          <div className="w-60">
            <ButtonText
              title="Add Article"
              type="button"
              onPress={() => onPressModal('add-product', { id: '' })}
            />
          </div>
        </div>
        <div className=" w-full grid grid-cols-1 lg:grid-cols-3 gap-4">
          {article?.data?.map?.((item, index) => (
            <CardArticle key={index} data={item} />
          ))}
        </div>
        <div className="flex justify-end items-center my-3 gap-x-4">
          <ButtonText
            title="Prev"
            disable={isPrevDisabled}
            onPress={handlePrev}
            type="button"
          />
          <span className="font-sans font-semibold">{pagination?.page}</span>
          <ButtonText
            title="Next"
            onPress={handleNext}
            disable={isNextDisabled}
            type="button"
          />
        </div>
      </div>
      <ModalForm
        visible={modal.visible}
        handleSubmit={handleSubmit}
        onCancel={() => onPressModal('', { id: '' })}
        register={registerForm}
        errors={errorForm}
        control={control}
        onSubmit={onSubmit}
        loading={article?.loading === 'pending'}
      />
    </section>
  );
};

export default Branda;

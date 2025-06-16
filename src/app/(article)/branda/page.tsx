'use client';
import ButtonText from '@/components/buttons/button-text';
import CardArticle from '@/components/cards/card-article';
import ModalForm from '@/components/modals/modal-form';
// import SelectArticle from '@/components/select-with-pagination';
import ModalAlert from '@/components/modals/modal-alert';
import Image from 'next/image';
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
    isOpenModalAlert,
    core,
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
      onDeleteArticle,
      setIsOpenModalAlert,
    },
  } = useFunctionsHook();

  const onPressModal = (type: any, data: Datatypes) => {
    toggleSetModal(type, data);
  };

  return (
    <section className="container mx-auto">
      <div className=" flex flex-col justify-between items-center gap-y-5 my-8">
        <div className="relative h-60 bg-amber-700 w-full rounded-lg overflow-hidden">
          <Image
            src="/images/banner.jpg"
            alt="banner-image"
            fill
            className="object-cover object-center"
          />
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
          {core?.role === 'Admin' && (
            <div className="w-60">
              <ButtonText
                title="Add Article"
                type="button"
                onPress={() => onPressModal('add-article', { id: '' })}
              />
            </div>
          )}
        </div>
        <div className=" w-full grid grid-cols-1 lg:grid-cols-3 gap-4">
          {article?.loading === 'pending'
            ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map?.((item, index) => (
                <div
                  className="relative bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 ease-in-out cursor-wait"
                  key={index}
                >
                  <div className="relative h-44 w-full bg-gray-200 animate-pulse" />

                  <div className="p-4 text-left space-y-3 animate-pulse">
                    <div className="w-24 h-5 bg-gray-200 rounded-full" />
                    <div className="h-6 bg-gray-300 rounded w-3/4" />
                    <div className="h-4 bg-gray-200 rounded w-full" />
                    <div className="h-4 bg-gray-200 rounded w-5/6" />

                    <div className="flex items-center gap-4 mt-2">
                      <div className="w-20 h-4 bg-gray-200 rounded" />
                      <div className="w-24 h-4 bg-gray-200 rounded" />
                    </div>
                  </div>
                </div>
              ))
            : article?.data?.map?.((item: any, index: number) => (
                <CardArticle
                  key={index}
                  data={item}
                  core={core}
                  onDeletePress={(id: string) =>
                    setIsOpenModalAlert({ id: id })
                  }
                  onEditPress={(id: string) =>
                    onPressModal('update-article', { id })
                  }
                />
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
      <ModalAlert
        visible={isOpenModalAlert}
        onCancel={() => setIsOpenModalAlert({ id: '' })}
        onPress={onDeleteArticle}
      />
    </section>
  );
};

export default Branda;

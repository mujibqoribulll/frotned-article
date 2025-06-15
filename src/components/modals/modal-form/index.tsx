import ButtonText from '@/components/buttons/button-text';
import SelectArticle from '@/components/select-with-pagination';
import { Controller } from 'react-hook-form';

const ModalForm = (props: IModalFormProps) => {
  const {
    visible,
    onCancel,
    onPress,
    handleSubmit,
    register,
    errors,
    onSubmit,
    control,
    loading,
  } = props;

  if (!visible) {
    document.body.classList.remove('overflow-hidden');
    return null;
  } else {
    document.body.classList.add('overflow-hidden');
  }

  return (
    <div
      className="fixed bg-black/35 inset-0 flex justify-center items-center"
      onClick={onCancel}
    >
      <div
        className="bg-white min-w-lg rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4">
          <h2 className="text-base font-sans font-semibold">Add Article</h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-y-3 mt-3"
          >
            <div className="flex flex-col gap-y-3 items-center justify-center "></div>
            <label htmlFor="title" className="flex flex-1 flex-col">
              <span className="text-base font-sans">Title</span>
              <input
                type="text"
                id="title"
                autoFocus={false}
                placeholder="Input Title"
                className="outline-none border border-black/30 p-2 rounded-lg placeholder:text-gray-300 text-gray-700 font-sans text-base"
                {...register('title')}
              />
              {errors?.title?.message && (
                <p className="text-sm text-red-500 italic font-sans">
                  {errors?.title?.message}
                </p>
              )}
            </label>
            <label htmlFor="categories" className="flex flex-1 flex-col">
              <span className="text-base font-sans">Categories</span>
              <Controller
                name="categories"
                control={control}
                render={({ field, ref }) => {
                  return (
                    <SelectArticle
                      {...field}
                      value={field?.value}
                      onChange={(val) => {
                        field.onChange(val);
                      }}
                      inputRef={ref}
                    />
                  );
                }}
                rules={{ required: true }}
              />

              {errors?.categories?.message && (
                <p className="text-sm text-red-500 italic font-sans">
                  {errors?.categories?.message}
                </p>
              )}
            </label>

            <label htmlFor="description" className="flex flex-1 flex-col">
              <span className="text-base font-sans">Description</span>
              <textarea
                name="description"
                id="description"
                placeholder="Description"
                className="outline-none border border-black/30 p-2 rounded-lg placeholder:text-gray-300 text-gray-700 font-sans text-base"
                {...register('description')}
                autoFocus={false}
              />
              {errors?.description?.message && (
                <p className="text-sm text-red-500 italic font-sans">
                  {errors?.description?.message}
                </p>
              )}
            </label>
            <div className="flex flex-1 justify-end items-center gap-x-3">
              <ButtonText type="reset" title="Cancel" onPress={onCancel} />
              <ButtonText
                type="submit"
                title="Submit"
                onPress={onPress}
                loading={loading}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;

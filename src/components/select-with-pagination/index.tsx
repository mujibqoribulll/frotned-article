'use client';

import { AsyncPaginate, LoadOptions } from 'react-select-async-paginate';

import { getCategoriesThunk } from '@/app/(article)/branda/store/articleThunk';
import { useAppDispatch } from '@/store/hooks';

interface OptionType {
  value: number;
  label: string;
}
interface Article {
  id: number;
  title: string;
}

const SelectArticle = ({ value, onChange, ...rest }: any) => {
  const dispatch = useAppDispatch();

  const loadOptions: LoadOptions<OptionType, { page: number }> = async (
    searchQuery,
    loadedOptions,
    { page },
  ) => {
    const limit = 10;

    try {
      const data = await dispatch(
        getCategoriesThunk({ title: searchQuery, page, limit }),
      ).unwrap();

      const options = data.data
        .filter((item) => item?.id && item?.name)
        .map((item) => ({
          value: item.id,
          label: item.name,
        }));

      return {
        options,
        hasMore: page < data.totalPages,
        additional: { page: page + 1 },
      };
    } catch (err) {
      console.error('Failed to load categories:', err);
      return {
        options: [],
        hasMore: false,
        additional: { page },
      };
    }
  };

  return (
    <AsyncPaginate
      {...rest}
      value={value}
      onChange={onChange}
      loadOptions={loadOptions}
      additional={{ page: 1 }}
      isClearable
      debounceTimeout={400}
      placeholder="Search Categories"
      menuPortalTarget={document.body}
      menuPosition="fixed"
      styles={{
        menuPortal: (base) => ({ ...base, zIndex: 9999 }),
      }}
    />
  );
};
export default SelectArticle;

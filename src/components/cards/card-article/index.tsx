import ButtonIcon from '@/components/buttons/button-icon';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaPen } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';

const CardArticle = (props: any) => {
  const { data, onDeletePress, onEditPress, core } = props;
  const { title, imageUrl, category, user, createdAt, id } = data;
  let theDate = new Date(createdAt);
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className=" relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out">
      <div
        className="relative h-44 w-full"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt="default-image"
            fill
            className="object-cover object-top "
          />
        ) : (
          <Image
            src="/images/default-image.jpg"
            alt="default-image"
            fill
            className="object-cover object-top "
          />
        )}

        {core?.role === 'Admin' && (
          <div
            className={`absolute ${
              isVisible ? 'flex' : 'hidden'
            } top-0 bg-gray-600/40 h-full w-full justify-center items-center gap-x-3 cursor-pointer`}
          >
            <ButtonIcon
              icon={<MdDeleteForever size={25} className="text-white" />}
              styleContainer="bg-red-500 p-1 rounded-md"
              onPress={() => onDeletePress(id)}
            />
            <ButtonIcon
              icon={<FaPen size={25} className="text-white" />}
              styleContainer="bg-green-500 p-1 rounded-md"
              onPress={() => onEditPress(id)}
            />
          </div>
        )}
      </div>

      <div className="p-4 text-left">
        <span className="inline-block bg-purple-100 text-purple-700 text-xs font-semibold px-2 py-1 rounded-full mb-2">
          {category?.name}
        </span>
        <Link href={`/branda/${id}`}>
          <h3 className="text-lg font-bold mb-1 line-clamp-2">{title}</h3>
        </Link>

        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{'descr'}</p>
        <div className="flex items-center justify-start gap-2 text-sm text-gray-500">
          <span>{user?.username || '-'}</span>
          <span>{theDate.toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
};

export default CardArticle;

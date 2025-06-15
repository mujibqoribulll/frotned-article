import Image from 'next/image';

const CardArticle = (props: any) => {
  const { data } = props;
  const { title, imageUrl, category } = data;
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="relative h-44 w-full">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt="default-image"
            fill
            className="object-cover object-top"
          />
        ) : (
          <Image
            src="/images/default-image.jpg"
            alt="default-image"
            fill
            className="object-cover object-top"
          />
        )}
      </div>
      <div className="p-4 text-left">
        <span className="inline-block bg-purple-100 text-purple-700 text-xs font-semibold px-2 py-1 rounded-full mb-2">
          {category?.name}
        </span>

        <h3 className="text-lg font-bold mb-1 line-clamp-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{'descr'}</p>
        <div className="flex items-center justify-start gap-2 text-sm text-gray-500">
          <span>{'author.name'}</span>
          <span>{'created.at'}</span>
        </div>
      </div>
    </div>
  );
};

export default CardArticle;

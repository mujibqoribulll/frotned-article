import CONFIGS from '@/config';
import ENDPOINTS from '@/constant/endpoints.constant';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface Article {
  id: string;
  title: string;
  content: string;
  category: {
    id: string;
    name: string;
  };
  imageUrl: string;
}

async function getArticle(id: string): Promise<Article | null> {
  try {
    const res = await fetch(
      `${CONFIGS?.BASE_URL}/${ENDPOINTS.ARTICLE.DETAIL_SSR}/${id}`,
      {
        cache: 'no-store',
      },
    );

    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    return null;
  }
}

async function getArticleCategory(id: string): Promise<Article | null> {
  try {
    const res = await fetch(
      `${CONFIGS?.BASE_URL}/${ENDPOINTS.ARTICLE.GET_ALL}?category=${id}`,
      {
        cache: 'no-store',
      },
    );

    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    return null;
  }
}

const DetailArticle = async ({ params }: { params: { id: string } }) => {
  const article = await getArticle(params.id);

  if (!article) return notFound();

  const articleCategory = await getArticleCategory(article?.category?.id);
  let threeArticleOnly = articleCategory?.data?.slice(0, 3);

  return (
    <section className="container mx-auto my-10">
      <div>
        <h2 className="text-gray-800 text-lg font-semibold">
          {article?.title}
          <span className="inline-block bg-purple-100 text-purple-700 text-xs font-semibold px-2 py-1 rounded-full mb-2 ml-2">
            {article?.category?.name}
          </span>
        </h2>
        <div className="relative h-60 bg-amber-700 w-full rounded-lg overflow-hidden my-3">
          {article?.imageUrl ? (
            <Image
              src={article?.imageUrl}
              alt="default-image"
              fill
              className="object-cover object-top "
            />
          ) : (
            <Image
              src="/images/default-image.jpg"
              alt="default-image"
              fill
              className="object-cover object-top shadow-md"
            />
          )}
        </div>

        <div className="bg-gray-100 p-2 rounded-lg">
          <p className="text-justify text-base text-gray-500">
            {article?.content} Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Delectus cum cumque est, ad, dicta dolore hic
            illum eveniet nesciunt beatae, enim obcaecati magni sapiente dolorum
            odit veniam amet molestiae. Itaque aperiam a magni eligendi aliquam
            earum, totam cupiditate quaerat eum sapiente ducimus veniam ea nobis
            voluptatum, obcaecati nihil, repellat amet fugit error. Consectetur
            laborum odio sunt dicta pariatur minima sequi veniam porro magni, at
            et quia voluptate quos ex fugit ut nisi tempore assumenda delectus!
            Ipsam dicta, similique architecto repellendus quas rem quo autem
            quam quaerat eaque iste tempore dignissimos explicabo provident esse
            nihil optio minus perferendis quidem quis tempora ad. Et magni a
            harum ipsam, ut deleniti hic. Neque, cumque ea ut laboriosam
          </p>
        </div>

        <div className="grid grid-cols-3 gap-x-3 my-10">
          {threeArticleOnly?.map((category: any, index: number) => {
            let theDate = new Date(category?.createdAt);
            return (
              <div
                className=" relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
                key={index}
              >
                <div className="relative h-44 w-full">
                  {category?.imageUrl ? (
                    <Image
                      src={category?.imageUrl}
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
                </div>

                <div className="p-4 text-left">
                  <span className="inline-block bg-purple-100 text-purple-700 text-xs font-semibold px-2 py-1 rounded-full mb-2">
                    {category?.category?.name}
                  </span>
                  <Link href={`/branda/${category?.id}`}>
                    <h3 className="text-lg font-bold mb-1 line-clamp-2">
                      {category?.title}
                    </h3>
                  </Link>

                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {category?.content}
                  </p>
                  <div className="flex items-center justify-start gap-2 text-sm text-gray-500">
                    <span>{category?.user?.username || '-'}</span>
                    <span>{theDate.toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DetailArticle;

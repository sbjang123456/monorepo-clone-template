import Image from 'next/image';
import Link from 'next/link';
import type { Post } from 'service/posts';

type Props = {
  post: Post;
};
export default function PostCard({
  post: { title, description, date, category, path },
}: Props) {
  return (
    <Link href={path}>
      <article className="overflow-hidden rounded-md shadow-md hover:shadow-xl">
        <Image
          className="w-full"
          src={`/images/posts/${path}.png`}
          alt={title}
          width={300}
          height={200}
        />
        <div className="flex flex-col items-center p-4">
          <time className="self-end text-gray-700">{date.toString()}</time>
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="w-full truncate text-center">{description}</p>
          <span className="my-2 rounded-lg bg-green-100 px-2 text-sm">
            {category}
          </span>
        </div>
      </article>
    </Link>
  );
}

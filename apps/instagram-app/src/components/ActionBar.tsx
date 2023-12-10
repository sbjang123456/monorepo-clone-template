import { BookmarkIcon, HeartIcon } from 'components/ui/icons';
import { parseDate } from 'util/date';

type Props = {
  likes: string[];
  username: string;
  createdAt: string;
  text?: string;
};
export default function ActionBar({ likes, username, text, createdAt }: Props) {
  return (
    <>
      <div className="my-2 flex justify-between px-4">
        <HeartIcon />
        <BookmarkIcon />
      </div>
      <div className="px-4 py-1">
        <p className="mb-2 text-sm font-bold">{`${likes?.length ?? 0} ${
          likes?.length > 1 ? 'likes' : 'like'
        }`}</p>
        {text && (
          <p>
            <span className="mr-1 font-bold">{username}</span>
            {text}
          </p>
        )}
        <p className="my-2 text-xs uppercase text-neutral-500">
          {parseDate(createdAt)}
        </p>
      </div>
    </>
  );
}

type Props = {
  image?: string | null;
};

export default function Avatar({ image }: Props) {
  return (
    <div className="h-9 w-9 rounded-full bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300 ">
      <img
        className="rounded-full p-[0.1rem]"
        alt="user profile"
        src={image ?? undefined}
        referrerPolicy="no-referrer"
      />
    </div>
  );
}

interface ProfileNameProps {
  name: string;
}

export default function ProfileName({ name }: ProfileNameProps) {
  return <h2 className="text-xl font-bold text-black">{name}</h2>;
}

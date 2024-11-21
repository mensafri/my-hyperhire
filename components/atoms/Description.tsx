interface DescriptionProps {
  text: string;
}

export default function Description({ text }: DescriptionProps) {
  return <p className="text-sm text-white mt-2">{text}</p>;
}

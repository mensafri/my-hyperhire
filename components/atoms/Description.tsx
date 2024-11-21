interface DescriptionProps {
  text: string;
}

export default function Description({ text }: DescriptionProps) {
  return <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white mt-2 text-left">{text}</p>;
}

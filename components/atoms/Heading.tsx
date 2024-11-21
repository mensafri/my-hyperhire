interface HeadingProps {
  text: string;
}

export default function Heading({ text }: HeadingProps) {
  return <h1 className="text-4xl font-bold text-white animate-fadeInUp duration-500">{text}</h1>;
}

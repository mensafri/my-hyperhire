interface HeadingProps {
  text: string;
}

export default function Heading({ text }: HeadingProps) {
  return (
    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white animate-fadeInUp duration-500 text-left">
      {text}
    </h1>
  );
}

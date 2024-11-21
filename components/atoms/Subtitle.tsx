interface SubtitleProps {
  text: string;
}

export default function Subtitle({ text }: SubtitleProps) {
  return <p className="text-lg text-white mt-4 animate-fadeInUp duration-500">{text}</p>;
}

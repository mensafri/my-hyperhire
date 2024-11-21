interface CTAProps {
  text: string;
}

export default function CTA({ text }: CTAProps) {
  return <p className="text-xl text-white font-medium mt-6 animate-fadeIn duration-500 underline">{text}</p>;
}

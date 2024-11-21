interface CTAProps {
  text: string;
}

export default function CTA({ text }: CTAProps) {
  return (
    <p
      className="text-base sm:text-lg md:text-xl lg:text-2xl text-white font-medium mt-6 
                 animate-fadeIn duration-500 underline text-left hidden md:block">
      {text}
    </p>
  );
}

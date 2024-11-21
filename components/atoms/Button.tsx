interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export default function Button({ label, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-white text-[#4A77FF] px-4 py-2 rounded-lg font-bold text-sm md:text-base lg:text-lg 
                 w-full md:w-auto transition duration-200 hover:bg-[#EAF2FF] active:bg-[#D4E3FF]">
      {label}
    </button>
  );
}

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export default function Button({ label, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className="bg-white text-[#4A77FF] px-4 py-2 rounded-lg font-bold">
      {label}
    </button>
  );
}

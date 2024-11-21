interface DropdownItemProps {
  label: string;
  href?: string;
}

export default function DropdownItem({ label, href }: DropdownItemProps) {
  return (
    <a
      href={href || '#'}
      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition duration-150">
      {label}
    </a>
  );
}

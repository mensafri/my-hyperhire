import DropdownItem from '../atoms/DropdownItem';

export default function DropdownMenu() {
  return (
    <div className="absolute mt-2 bg-white border border-gray-300 rounded-lg shadow-lg w-56 sm:w-64">
      <DropdownItem label="해외 개발자 원격 채용" />
      <DropdownItem label="외국인 원격 채용 (비개발 직군)" />
      <div className="border-t border-gray-200" />
      <DropdownItem label="한국어 가능 외국인 채용" />
    </div>
  );
}

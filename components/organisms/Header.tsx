'use client';

import { useState } from 'react';
import Logo from '../atoms/Logo';
import Button from '../atoms/Button';
import DropdownMenu from '../molecules/DropdownMenu';

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="bg-transparent sticky top-0 py-4 px-36 flex items-center justify-between">
      <div className="flex items-center space-x-8">
        <Logo />
      </div>

      <nav className="absolute left-1/2 transform -translate-x-1/2 flex space-x-8">
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="text-white font-medium hover:underline flex items-center">
            채용 <span className="ml-1">▼</span>
          </button>
          {isDropdownOpen && <DropdownMenu />}
        </div>
        <a href="#" className="text-white font-medium hover:underline">
          해외 개발자 활용 서비스
        </a>
      </nav>

      <div className="flex items-center space-x-8">
        <Button label="문의하기" />
      </div>
    </header>
  );
}
import { FC } from 'react';
import Image from 'next/image';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard: FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="rounded-lg p-4 flex flex-col items-start justify-between w-52 h-28 sm:w-56 sm:h-32 md:w-64 md:h-36">
      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center bg-gray-100 rounded-md relative">
        <Image src={icon} fill alt={title} />
      </div>
      <h3 className="text-gray-800 font-medium text-sm sm:text-base md:text-lg mt-2">{title}</h3>
      <div className="flex items-center text-blue-500 font-medium text-xs sm:text-sm md:text-base mt-4 cursor-pointer">
        {description} <span className="ml-1">→</span>
      </div>
    </div>
  );
};

export default ServiceCard;

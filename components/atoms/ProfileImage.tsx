import Image from 'next/image';

interface ProfileImageProps {
  src: string;
  alt: string;
  flagSrc: string;
}

export default function ProfileImage({ src, alt, flagSrc }: ProfileImageProps) {
  return (
    <div className="relative inline-block w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36">
      <div className="w-full h-full rounded-full border-4 border-gray-200 overflow-hidden shadow-lg">
        <Image src={src} alt={alt} fill />
      </div>
      <div className="absolute bottom-0 right-0 w-6 h-4 sm:w-7 sm:h-5 md:w-8 md:h-6 bg-white rounded-sm shadow-md flex items-center justify-center overflow-hidden">
        <Image src={flagSrc} alt="Country Flag" fill />
      </div>
    </div>
  );
}

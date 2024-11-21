import Image from 'next/image';

interface ProfileImageProps {
  src: string;
  alt: string;
  flagSrc: string; // URL gambar bendera
}

export default function ProfileImage({ src, alt, flagSrc }: ProfileImageProps) {
  return (
    <div className="relative inline-block w-36 h-36">
      {/* Profile Image */}
      <div className="w-36 h-36 rounded-full border-4">
        <Image src={src} alt={alt} fill />
      </div>
      {/* Flag */}
      <div className="absolute bottom-0 right-0 w-8 h-6 bg-white rounded-sm shadow-md flex items-center justify-center">
        <img src={flagSrc} alt="Country Flag" className="w-full h-full rounded-sm" />
      </div>
    </div>
  );
}

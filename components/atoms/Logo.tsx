import Image from 'next/image';

export default function Logo() {
  return (
    <div className="flex items-center">
      <Image src="/hyperhire-logo.png" alt="HyperHire Logo" width={24} height={24} />
      <span className="ml-2 font-bold text-white">hyperhire</span>
    </div>
  );
}

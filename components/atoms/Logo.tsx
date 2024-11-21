import Image from 'next/image';

export default function Logo() {
  return (
    <div className="flex items-center">
      <Image src="/hyperhire-logo.png" alt="HyperHire Logo" width={32} height={32} />
      <span className="ml-3 font-bold text-lg text-white">hyperhire</span>
    </div>
  );
}

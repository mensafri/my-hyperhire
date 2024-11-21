import Image from 'next/image';

const InfoFooter = () => {
  return (
    <div className="flex flex-col items-start justify-center p-6 ">
      <div className="mb-4">
        <Image src="/logo.png" width={100} height={40} alt="Hyperhire Logo" />
      </div>

      <p className="text-gray-600 text-start font-medium mb-4">
        우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.
      </p>

      <div className="text-gray-800 font-bold text-base text-start">
        <p>010-0000-0000</p>
        <p>aaaaa@naver.com</p>
      </div>
    </div>
  );
};

export default InfoFooter;

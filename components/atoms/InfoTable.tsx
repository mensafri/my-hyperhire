const InfoTable = () => {
  const infoData = [
    {
      title: '상호명',
      korean: '하이퍼하이어',
      english: 'Hyperhire India Private Limited',
    },
    {
      title: '대표 CEO',
      korean: '김주현',
      english: 'Juhyun Kim',
    },
    {
      title: '사업자등록번호 CIN',
      korean: '427-86-01187',
      english: 'U74110DL2016PTC290812',
    },
    {
      title: '주소 ADDRESS',
      korean: '서울특별시 강남대로 479, 지하 1층 238호',
      english: 'D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 110053 India',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full p-6">
      {infoData.map((item, index) => (
        <div key={index} className="flex flex-col">
          <h4 className="text-gray-600 font-bold text-sm mb-2">{item.title}</h4>
          <p className="text-gray-800 font-medium text-sm">{item.korean}</p>
          <p className="text-gray-800 font-semibold text-sm">{item.english}</p>
        </div>
      ))}
    </div>
  );
};

export default InfoTable;

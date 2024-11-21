'use server';

export async function getProfiles() {
  return [
    {
      id: 1,
      name: 'Abhishek Gupta',
      job: '마케팅',
      experience: '2y+',
      flagSrc: '/flags/colombia.png', // Gambar bendera (letakkan di folder public/flags)
      image: '/profile1.png',
      skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
    },
    {
      id: 2,
      name: 'Abhishek Gupta',
      job: '마케팅',
      experience: '2y+',
      flagSrc: '/flags/colombia.png', // Gambar bendera (letakkan di folder public/flags)
      image: '/profile1.png',
      skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
    },
    {
      id: 3,
      name: 'Abhishek Gupta',
      job: '마케팅',
      experience: '2y+',
      flagSrc: '/flags/colombia.png', // Gambar bendera (letakkan di folder public/flags)
      image: '/profile1.png',
      skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
    },
  ];
}

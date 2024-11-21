import ServiceCard from '@/components/atoms/ServiceCard';

const ServicesSection = () => {
  const services = [
    {
      icon: '/icons/code.png',
      title: '해외 개발자 원격 채용',
      description: '바로가기',
    },
    {
      icon: '/icons/user.png',
      title: '외국인 원격 채용 (비개발)',
      description: '바로가기',
    },
    {
      icon: '/icons/kor.png',
      title: '한국어 가능 외국인 채용',
      description: '바로가기',
    },
    {
      icon: '/icons/settings.png',
      title: '해외 개발자 활용 서비스',
      description: '바로가기',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-4 md:p-6 lg:gap-6">
      {services.map((service, index) => (
        <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
      ))}
    </div>
  );
};

export default ServicesSection;

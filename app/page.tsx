import HeroContent from '@/components/molecules/HeroContent';
import HeroSection from '@/components/organisms/HeroSection';
import { getInfoData } from './actions/getInfoData';
import InfoCard from '@/components/molecules/InfoCard';
import ProfileCarousel from '@/components/organisms/ProfileCarousel';

export default async function Home() {
  const infoData = await getInfoData();
  return (
    <div className="px-36 flex flex-row w-full pt-12">
      <div className="flex flex-col w-1/2 gap-12">
        <HeroContent />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fadeIn duration-500">
          {infoData.map((item, index) => (
            <InfoCard key={index} statistic={item.statistic} description={item.description} />
          ))}
        </div>
      </div>
      <div className="w-1/2">
        <ProfileCarousel />
      </div>
    </div>
  );
}

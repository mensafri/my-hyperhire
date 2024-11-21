import HeroContent from '@/components/molecules/HeroContent';
import { getInfoData } from './actions/getInfoData';
import InfoCard from '@/components/molecules/InfoCard';
import ProfileCarousel from '@/components/organisms/ProfileCarousel';
import Tooltip from '@/components/atoms/Tooltip';
import CardSlider from '@/components/organisms/CardSlider';
import { getCards } from './actions/getCards';
import { getProfiles } from './actions/getProfiles';

export default async function Home() {
  const infoData = await getInfoData();
  const cards = await getCards();
  const profiles = await getProfiles();

  return (
    <div className="px-4 md:px-12 lg:px-36 flex flex-col w-full gap-8">
      <div className="flex flex-col md:flex-row w-full gap-8">
        <div className="flex flex-col w-full md:w-1/2 gap-8 mt-6">
          <HeroContent />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 animate-fadeIn duration-500">
            {infoData.map((item, index) => (
              <InfoCard key={index} statistic={item.statistic} description={item.description} />
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center gap-12">
          <Tooltip text="월 100만원" icon="$" />
          <ProfileCarousel profiles={profiles} />
        </div>
      </div>

      <div className="mt-12 w-full">
        <CardSlider cards={cards} />
      </div>
    </div>
  );
}

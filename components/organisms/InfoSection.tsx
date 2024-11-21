import InfoCard from '../molecules/InfoCard';
import { getInfoData } from '@/app/actions/getInfoData';

export default async function InfoSection() {
  // Fetch data from the server
  const infoData = await getInfoData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fadeIn duration-500">
      {infoData.map((item, index) => (
        <InfoCard key={index} statistic={item.statistic} description={item.description} />
      ))}
    </div>
  );
}

import Statistic from '../atoms/Statistic';
import Description from '../atoms/Description';

interface InfoCardProps {
  statistic: string;
  description: string;
}

export default function InfoCard({ statistic, description }: InfoCardProps) {
  return (
    <div className="space-y-2 border-t border-white pt-2 hidden md:block">
      <Statistic text={statistic} />
      <Description text={description} />
    </div>
  );
}

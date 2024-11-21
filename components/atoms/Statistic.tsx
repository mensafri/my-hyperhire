interface StatisticProps {
  text: string;
}

export default function Statistic({ text }: StatisticProps) {
  return <h3 className="text-lg font-bold text-white">{text}</h3>;
}

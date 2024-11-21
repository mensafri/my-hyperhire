import Tag from '../atoms/Tag';
import Heading from '../atoms/Heading';
import Subtitle from '../atoms/Subtitle';
import CTA from '../atoms/CTA';

export default function HeroContent() {
  return (
    <div className="space-y-4 text-center md:text-left">
      <Tag />
      <Heading text="최고의 실력을 가진 외국인 인재를 찾고 계신가요?" />
      <Subtitle text="법률 및 인사관리 부담없이 1주일 이내에 원격으로 채용해보세요." />
      <CTA text="개발자가 필요하신가요?" />
    </div>
  );
}

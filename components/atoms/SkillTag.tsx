interface SkillTagProps {
  skill: string;
}

export default function SkillTag({ skill }: SkillTagProps) {
  return (
    <span className="text-base text-[#5E626F] font-bold px-3 py-1 border border-gray-300 rounded-lg">{skill}</span>
  );
}

import ProfileImage from '../atoms/ProfileImage';
import SkillTag from '../atoms/SkillTag';

interface ProfileCardProps {
  name: string;
  job: string;
  experience: string;
  flagSrc: string;
  image: string;
  skills: string[];
}

export default function ProfileCard({ name, job, experience, flagSrc, image, skills }: ProfileCardProps) {
  return (
    <div className="bg-white px-2 py-16 rounded-lg shadow-lg w-80 relative">
      {/* Profile Image */}
      <div className="flex justify-center">
        <ProfileImage src={image} alt={name} flagSrc={flagSrc} />
      </div>

      {/* Profile Info */}
      <div className="text-center mt-4">
        <h2 className="text-2xl font-bold text-black tracking-tight">{name}</h2>
        <p className="text-sm text-gray-500 flex items-center justify-center gap-1 mt-1">
          <span className="text-blue-500">{job}</span> • <span className="text-blue-700 font-bold">{experience}</span>
        </p>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2 mt-4 justify-center">
        {skills.map((skill, index) => (
          <SkillTag key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
}

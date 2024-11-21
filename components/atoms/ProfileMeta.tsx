interface ProfileMetaProps {
  job: string;
  experience: string;
  countryFlag: string;
}

export default function ProfileMeta({ job, experience, countryFlag }: ProfileMetaProps) {
  return (
    <p className="text-sm text-gray-600">
      {job} · {experience} <span>{countryFlag}</span>
    </p>
  );
}

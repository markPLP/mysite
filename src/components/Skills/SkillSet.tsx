type SkillSetProps = {
  skills: { name: string; icon: string }[];
};

const SkillSet = ({ skills }: SkillSetProps) => {
  return (
    <ul className="flex flex-wrap gap-6">
      {skills.map((skill) => {
        return (
          <li
            key={skill.name}
            className="flex items-center gap-2 px-5 py-3 border rounded-md bg-custom-gradient text-md"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-6 h-6 object-fit"
            />
            {skill.name}
          </li>
        );
      })}
    </ul>
  );
};

export default SkillSet;

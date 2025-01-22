import { DescriptionItem, SkillsCategory } from '@/utils/types';

const AboutInfoDescription = ({
  description,
}: {
  description: DescriptionItem;
}) => {
  if (description.type === 'text') {
    return <p className="mb-4">{description.content as string}</p>;
  }

  if (description.type === 'list') {
    return (
      <ul className="list-disc pl-5 mb-4">
        {(description.content as string[]).map((listItem, listIndex) => (
          <li key={listIndex}>{listItem}</li>
        ))}
      </ul>
    );
  }

  if (description.type === 'skills') {
    return (
      <div>
        {(description.content as SkillsCategory[]).map(
          (category, categoryIndex) => (
            <div key={categoryIndex} className="mb-4">
              <h3 className="text-lg font-semibold mb-2">{category.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="flex items-center gap-2 px-4 py-2 border rounded-md bg-custom-gradient text-xs"
                  >
                    <img
                      src={skill.icon}
                      className="w-4 h-4 object-fit"
                      alt={skill.name}
                    />
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          )
        )}
      </div>
    );
  }

  return null;
};

export default AboutInfoDescription;

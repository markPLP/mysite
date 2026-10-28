import { DescriptionItem, SkillsCategory } from '@/utils/types';

const AboutInfoDescription = ({
  description,
}: {
  description: DescriptionItem;
}) => {
  if (description.type === 'text') {
    return <p className="mb-4 leading-relaxed">{description.content as string}</p>;
  }

  if (description.type === 'list') {
    return (
      <ul className="mb-4 list-disc space-y-1 pl-5">
        {(description.content as string[]).map((listItem) => (
          <li key={listItem}>{listItem}</li>
        ))}
      </ul>
    );
  }

  if (description.type === 'skills') {
    return (
      <div>
        {(description.content as SkillsCategory[]).map((category) => (
          <div key={category.id} className="mb-5 last:mb-0">
            <h4 className="mb-2 text-sm font-semibold tracking-widest text-muted-foreground">
              {category.title}
            </h4>
            <ul className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <li
                  key={skill.name}
                  className="flex items-center gap-2 rounded-md border bg-secondary px-3 py-1.5 text-xs text-secondary-foreground"
                >
                  <img
                    src={skill.icon}
                    className="h-4 w-4 object-contain"
                    alt=""
                    aria-hidden="true"
                  />
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }

  return null;
};

export default AboutInfoDescription;

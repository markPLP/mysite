type DescriptionItem = {
  type: string;
  items: string[];
};

const AboutInfoDescription = (
  description: string | (string | DescriptionItem)[]
) => {
  if (Array.isArray(description)) {
    return description.map((item, index) => {
      if (typeof item === 'string') {
        return (
          <p key={index} className="mb-4">
            {item}
          </p>
        );
      }

      if ((item as DescriptionItem).type === 'list') {
        return (
          <ul key={index} className="list-disc pl-5 mb-4">
            {(item as DescriptionItem).items.map((listItem, listIndex) => (
              <li key={listIndex}>{listItem}</li>
            ))}
          </ul>
        );
      }
      return null;
    });
  }
  return <p>{description}</p>;
};

export default AboutInfoDescription;

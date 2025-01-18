const AboutInfo = ({ currentItemId, data }) => {
  const currentItem = data.filter((item) => item.id === currentItemId);
  console.log(currentItem);

  const renderDescription = (description) => {
    if (Array.isArray(description)) {
      return description.map((item, index) => {
        if (typeof item === 'string') {
          return (
            <p key={index} className="mb-4">
              {item}
            </p>
          );
        }

        if (item.type === 'list') {
          return (
            <ul key={index} className="list-disc pl-5 mb-4">
              {item.items.map((listItem, listIndex) => (
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

  return (
    <div>
      {currentItem.map((item) => {
        const { id, title, label, description } = item;
        return (
          <div key={id}>
            <p className="first-letter:capitalize text-3xl mb-3">{label}</p>
            <h2 className="text-3xl font-bold text-primary mb-6 border-b-2 pb-3">
              {title}
            </h2>
            {renderDescription(description)}
            {/* <p>{description}</p> */}
          </div>
        );
      })}
    </div>
  );
};

export default AboutInfo;

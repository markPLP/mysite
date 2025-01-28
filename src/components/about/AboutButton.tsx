import { useState } from 'react';

type AboutButtonProps = {
  data: { id: string; label: string }[];
  setCurrentItem: (id: string) => void;
  currentItemId: string;
};

const AboutButton = ({
  data,
  setCurrentItem,
  currentItemId,
}: AboutButtonProps) => {
  const [active, setActive] = useState<string>(currentItemId);
  const handleClick = (id: string) => {
    setCurrentItem(id);
    setActive(id);
  };

  return (
    <div className="flex gap-4 justify-items-end md:rtl md:block">
      {data?.map((item) => {
        const { id, label } = item;

        return (
          <button
            onClick={() => handleClick(id)}
            key={id}
            className={`${
              id === active ? 'border-primary' : 'border-transparent'
            } text-right border-b-2 md:w-auto md:block md:mb-2`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};

export default AboutButton;

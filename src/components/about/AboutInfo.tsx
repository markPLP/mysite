import { AboutItem } from '@/utils/types';
import AboutInfoDescription from './AboutInfoDescription';
import React, { useMemo } from 'react';

type AboutInfoProps = {
  currentItemId: string | null;
  data: AboutItem[];
};

const AboutInfo = ({ currentItemId, data }: AboutInfoProps) => {
  const currentItem = useMemo(
    () => data.find((item) => item.id === currentItemId),
    [currentItemId, data]
  );

  if (!currentItem) return null;

  return (
    <div>
      <p className="uppercase text-xl mb-3">{currentItem.label}</p>
      <h2 className="text-3xl font-bold text-primary mb-6 border-b-2 pb-3">
        {currentItem.title}
      </h2>
      {currentItem.description.map((descItem, index) => (
        <AboutInfoDescription key={index} description={descItem} />
      ))}
    </div>
  );
};

export default React.memo(AboutInfo);

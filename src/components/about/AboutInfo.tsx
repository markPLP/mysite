import { AboutData } from '@/utils/types';
import AboutInfoDescription from './AboutInfoDescription';
import React, { useMemo } from 'react';

type AboutInfoProps = {
  currentItemId: string | null;
  data: AboutData[];
};

const AboutInfo = ({ currentItemId, data }: AboutInfoProps) => {
  const currentItem = useMemo(
    () => data.filter((item) => item.id === currentItemId),
    [currentItemId, data]
  );

  return (
    <div>
      {currentItem.map((item) => {
        const { id, title, label, description } = item;
        console.log(description, 'description');

        return (
          <div key={id}>
            <p className="first-letter:capitalize text-3xl mb-3">{label}</p>
            <h2 className="text-3xl font-bold text-primary mb-6 border-b-2 pb-3">
              {title}
            </h2>
            {AboutInfoDescription(description)}
          </div>
        );
      })}
    </div>
  );
};

export default React.memo(AboutInfo);

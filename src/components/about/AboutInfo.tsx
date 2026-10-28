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
    <div
      id="about-panel"
      role="tabpanel"
      aria-labelledby={`about-tab-${currentItem.id}`}
      className="rounded-xl border bg-card p-6 text-card-foreground md:p-8"
    >
      <h3 className="mb-6 border-b pb-4 text-2xl font-bold text-primary-text md:text-3xl">
        {currentItem.title}
      </h3>
      {currentItem.description.map((descItem, index) => (
        <AboutInfoDescription key={index} description={descItem} />
      ))}
    </div>
  );
};

export default React.memo(AboutInfo);

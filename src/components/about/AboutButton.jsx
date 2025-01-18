import { Button } from '../ui/button';

const AboutButton = ({ data, setCurrentItem }) => {
  return (
    <div className="flex flex-col gap-4">
      {data?.map((item) => {
        const { id, label } = item;

        return (
          <button
            onClick={() => setCurrentItem(id)}
            key={id}
            className="text-right"
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};

export default AboutButton;

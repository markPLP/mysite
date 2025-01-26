type AboutButtonProps = {
  data: { id: string; label: string }[];
  setCurrentItem: (id: string) => void;
};

const AboutButton = ({ data, setCurrentItem }: AboutButtonProps) => {
  return (
    <div className="flex gap-4 flex-wrap md:flex-col ">
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

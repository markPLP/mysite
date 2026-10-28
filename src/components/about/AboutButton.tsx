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
  return (
    <div
      role="tablist"
      aria-label="About me"
      className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] md:flex-col md:overflow-visible"
    >
      {data.map(({ id, label }) => {
        const selected = id === currentItemId;
        return (
          <button
            key={id}
            id={`about-tab-${id}`}
            role="tab"
            type="button"
            aria-selected={selected}
            aria-controls="about-panel"
            onClick={() => setCurrentItem(id)}
            className={`whitespace-nowrap rounded-md border px-4 py-2 text-left text-sm font-medium uppercase tracking-wider transition-colors ${
              selected
                ? 'border-primary bg-primary/10 text-primary-text'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};

export default AboutButton;

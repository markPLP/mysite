export const onLoadIntersectionObserver = ({
  setVisibleSections,
  sections,
}: {
  setVisibleSections: any;
  sections: { id: string; component: any }[];
}) => {
  history.replaceState(null, '', ' '); // Clear the URL hash
  window.scrollTo(0, 0); // Scroll to top on page load
  const observer = new IntersectionObserver(
    (entries) => {
      // avoid jumping to other sections on page load
      let firstVisibleSection = entries.find((entry) => entry.isIntersecting); // Find the first section that is visible on page load
      if (firstVisibleSection) {
        setVisibleSections((prev: string[]) => {
          // prev is the previous state of visibleSections
          const newVisibleSections = new Set(prev); // Create a new set with the previous state of visibleSections as it scrolls

          // newVisibleSections.add((firstVisibleSection.target as HTMLElement).id);
          //Add the first visible section to the new set
          entries.forEach((entry: IntersectionObserverEntry) => {
            if (entry.isIntersecting) {
              newVisibleSections.add((entry.target as HTMLElement).id);
            }
          });

          return Array.from(newVisibleSections);
        });
      }
    },
    { threshold: 0.1 } // Load when 10% of section is visible
  );

  sections.forEach(({ id }) => {
    const section = document.getElementById(id);
    if (section) observer.observe(section);
  });

  return () => observer.disconnect();
};

export const sectionIntersectionObserver = (state: any) => {
  const sections = document.querySelectorAll('section');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let target = entry.target as HTMLElement;
          // Traverse upwards to find the closest parent with an ID
          while (target && !target.id) {
            target = target.parentElement as HTMLElement;
          }
          if (target?.id) {
            // setActiveSection(target.id);
            state(target.id);
            console.log(target.id + ' is intersecting');
          }
        }
      });
    },
    { threshold: 0.1 }
  );

  sections.forEach((section) => observer.observe(section));

  return () => observer.disconnect(); // Cleanup observer on unmount
};

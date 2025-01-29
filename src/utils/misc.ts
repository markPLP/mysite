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
    { threshold: 0.5 } // Trigger when 50% of the section is visible
  );

  sections.forEach((section) => observer.observe(section));

  return () => observer.disconnect(); // Cleanup observer on unmount
};

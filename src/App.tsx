import { lazy, Suspense, useEffect, useState } from 'react';
import { ThemeProvider } from './components/theme-provider';
import { SidebarProvider } from './context/SidebarContext';
import Header from './components/navbar/Header';
import Navbar from './components/navbar/Navbar';
import NavbarMobile from './components/navbar/NavbarMobile';
import { Toaster } from './components/ui/toaster';
import { onLoadIntersectionObserver } from './utils/misc';

// Lazy load sections
const HeroBanner = lazy(() => import('./components/hero/HeroBanner'));
const About = lazy(() => import('./components/about/About'));
const Timeline = lazy(() => import('./components/experience/Timeline'));
const ProjectWrapper = lazy(
  () => import('./components/projects/ProjectWrapper')
);
const Contact = lazy(() => import('./components/contact/Contact'));

const sections = [
  { id: 'home', component: HeroBanner },
  { id: 'about', component: About },
  { id: 'experience', component: Timeline },
  { id: 'projects', component: ProjectWrapper },
  { id: 'contact', component: Contact },
];

const App = () => {
  const [visibleSections, setVisibleSections] = useState<string[]>([]);
  console.log(visibleSections, 'visibleSections');

  useEffect(() => {
    // setVisibleSections - set home as visible section on page load
    onLoadIntersectionObserver({ setVisibleSections, sections });
  }, []);

  return (
    <ThemeProvider>
      <SidebarProvider>
        <Header />
        <Navbar />
      </SidebarProvider>

      <main>
        {sections.map(({ id, component: Section }) => (
          <section
            key={id}
            id={id}
            className="scroll-mt-28 min-h-[100vh]"
            // style={{ minHeight: '100vh' }}
          >
            {visibleSections.includes(id) ? (
              <Suspense>
                <Section />
              </Suspense>
            ) : (
              <div /> // Placeholder until section loads
            )}
          </section>
        ))}
      </main>

      <NavbarMobile />
      <Toaster />
    </ThemeProvider>
  );
};

export default App;

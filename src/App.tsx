import { lazy, Suspense, useEffect, useState } from 'react';
import { ThemeProvider } from './components/theme-provider';
import { SidebarProvider } from './context/SidebarContext';
import Header from './components/navbar/Header';
import Navbar from './components/navbar/Navbar';
import NavbarMobile from './components/navbar/NavbarMobile';
import { Toaster } from './components/ui/toaster';
import { onLoadIntersectionObserver } from './utils/observers';
import NinjaLoader from './components/global/NinjaLoader';

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
  const [isAppReady, setIsAppReady] = useState(false); // App loading state

  // Simulate loading before showing the app
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAppReady(true);
    }, 6000); // Adjust timing as needed

    return () => clearTimeout(timer);
  }, []);

  // Initialize Intersection Observer after the app is ready
  useEffect(() => {
    if (isAppReady) {
      onLoadIntersectionObserver({ setVisibleSections, sections });

      // Ensure at least the "home" section is visible on initial load
      setVisibleSections(['home']);
    }
  }, [isAppReady]);

  // Show loading screen until the app is ready
  if (!isAppReady) {
    return <NinjaLoader />;
  }

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
            className="scroll-mt-28 min-h-[100vh] overflow-x-hidden"
          >
            {visibleSections.includes(id) ? (
              <Suspense fallback={<LoadingSpinner />}>
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

// Loading Spinner (for sections)
function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center min-h-[100vh]">
      <div className="animate-spin rounded-full border-t-4 border-blue-600 h-12 w-12"></div>
    </div>
  );
}

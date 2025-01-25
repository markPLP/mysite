import { Suspense, lazy } from 'react';
import { ThemeProvider } from './components/theme-provider';
import { SidebarProvider } from './context/SidebarContext';
import Header from './components/navbar/Header';
import Navbar from './components/navbar/Navbar';

// Lazy load components
const NavbarMobile = lazy(() => import('./components/navbar/NavbarMobile'));
const HeroBanner = lazy(() => import('./components/hero/HeroBanner'));
const About = lazy(() => import('./components/about/About'));
const Timeline = lazy(() => import('./components/experience/Timeline'));
const Projects = lazy(() => import('./components/projects/Projects'));

const App = () => {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <Header />
        <Navbar />
      </SidebarProvider>
      <main>
        <Suspense fallback={<div>Loading Hero Banner...</div>}>
          <HeroBanner />
        </Suspense>
        <Suspense fallback={<div>Loading About Section...</div>}>
          <About />
        </Suspense>
        <Suspense fallback={<div>Loading Timeline...</div>}>
          <Timeline />
        </Suspense>
        <Suspense fallback={<div>Loading Projects...</div>}>
          <Projects />
        </Suspense>
      </main>
      <Suspense fallback={<div>Loading Mobile Navbar...</div>}>
        <NavbarMobile />
      </Suspense>
    </ThemeProvider>
  );
};

export default App;

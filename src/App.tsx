import { ThemeProvider } from './components/theme-provider';
import { SidebarProvider } from './context/SidebarContext';
import Header from './components/navbar/Header';
import Navbar from './components/navbar/Navbar';
import HeroBanner from './components/hero/HeroBanner';
import About from './components/about/About';
import Timeline from './components/experience/Timeline';
import Projects from './components/projects/Projects';
import NavbarMobile from './components/navbar/NavbarMobile';
import Contact from './components/contact/contact';

// Lazy load components
// const NavbarMobile = lazy(() => import('./components/navbar/NavbarMobile'));
// const HeroBanner = lazy(() => import('./components/hero/HeroBanner'));
// const About = lazy(() => import('./components/about/About'));
// const Timeline = lazy(() => import('./components/experience/Timeline'));
// const Projects = lazy(() => import('./components/projects/Projects'));

const App = () => {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <Header />
        <Navbar />
      </SidebarProvider>
      <main>
        <HeroBanner />
        <About />
        <Timeline />
        <Projects />
        <Contact />
      </main>
      <NavbarMobile />
    </ThemeProvider>
  );
};

export default App;

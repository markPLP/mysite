import Header from './components/navbar/Header';
import HeroBanner from './components/hero/HeroBanner';
import Navbar from './components/navbar/Navbar';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from './components/theme-provider';
import { SidebarProvider } from './context/SidebarContext';
import NavbarMobile from './components/navbar/NavbarMobile';
import About from './components/about/About';
import Timeline from './components/experience/Timeline';
import Projects from './components/projects/Projects';
import { useFetchProjects } from './hooks/usefetchProjects';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      // refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
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
          {/* <Skills /> */}
        </main>
        <NavbarMobile />
      </ThemeProvider>
    </QueryClientProvider>
  );
};
export default App;

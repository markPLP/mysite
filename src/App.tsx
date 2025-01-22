import Header from './components/navbar/Header';
import HeroBanner from './components/hero/HeroBanner';
import Navbar from './components/navbar/Navbar';
import { ThemeProvider } from './components/theme-provider';
import { SidebarProvider } from './context/SidebarContext';
import NavbarMobile from './components/navbar/NavbarMobile';
import About from './components/about/About';
import Timeline from './components/experience/Timeline';

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
        {/* <Skills /> */}
      </main>
      <NavbarMobile />
    </ThemeProvider>
  );
};
export default App;

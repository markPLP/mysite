import Header from './components/navbar/Header';
import HeroBanner from './components/HeroBanner';
import Navbar from './components/navbar/Navbar';
import { ThemeProvider } from './components/theme-provider';
import { SidebarProvider } from './context/SidebarContext';
import NavbarMobile from './components/navbar/NavbarMobile';

const App = () => {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <Header />
        <Navbar />
      </SidebarProvider>
      <main>
        <HeroBanner />
      </main>
      <NavbarMobile />
    </ThemeProvider>
  );
};
export default App;

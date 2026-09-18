import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './components/theme-provider';
import { Toaster } from './components/ui/toaster';
import Home from './pages/Home';

// Split out of the main bundle — the home page shouldn't pay for the resume.
const ResumePage = lazy(() => import('./pages/ResumePage'));

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/resume"
            element={
              <Suspense fallback={<div className="min-h-screen" />}>
                <ResumePage />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </ThemeProvider>
  );
};

export default App;

import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MotionConfig } from 'motion/react';
import { ThemeProvider } from './components/theme-provider';
import { Toaster } from './components/ui/toaster';
import ScrollManager from './components/layout/ScrollManager';
import Home from './pages/Home';

// Split out of the main bundle — the home page shouldn't pay for these.
const ResumePage = lazy(() => import('./pages/ResumePage'));
const ProjectPage = lazy(() => import('./pages/ProjectPage'));

const Fallback = <div className="min-h-screen" />;

const App = () => {
  return (
    <ThemeProvider>
      {/* reducedMotion="user": honour prefers-reduced-motion everywhere. */}
      <MotionConfig reducedMotion="user">
        <BrowserRouter>
          <ScrollManager />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/resume"
              element={
                <Suspense fallback={Fallback}>
                  <ResumePage />
                </Suspense>
              }
            />
            <Route
              path="/projects/:slug"
              element={
                <Suspense fallback={Fallback}>
                  <ProjectPage />
                </Suspense>
              }
            />
          </Routes>
        </BrowserRouter>
        <Toaster />
      </MotionConfig>
    </ThemeProvider>
  );
};

export default App;

import { lazy, Suspense, useEffect } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import BackgroundPattern from "./components/BackgroundPattern";
import { useInitialLoad } from "./hooks/useInitialLoad";

// Lazy load pages for code splitting
const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));
const ProjectCategory = lazy(() => import("./pages/ProjectCategory"));
const CV = lazy(() => import("./pages/CV"));

// Loading fallback for route transitions
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <p className="text-primary text-sm font-bold uppercase tracking-widest">
      Please wait...
    </p>
  </div>
);

// ScrollToTop component to reset scroll on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const { isLoading, handleLoadingComplete } = useInitialLoad();

  // Show loading screen on page reload/refresh
  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-50 selection:bg-primary selection:text-black relative">
        {/* Background Pattern Layers */}
        <BackgroundPattern variant="circuit" opacity={0.4} />
        <BackgroundPattern variant="dots" opacity={0.2} animated />

        {/* Content Layer */}
        <div className="relative z-10">
          <Navbar />
          <main className="grow mt-20">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route
                  path="/projects/:category"
                  element={<ProjectCategory />}
                />
                <Route path="/cv" element={<CV />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;

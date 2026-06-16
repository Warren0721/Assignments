import { Routes, Route, useLocation } from 'react-router';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Topic1 from './pages/Topic1';
import Topic2 from './pages/Topic2';
import Topic3 from './pages/Topic3';
import Topic4 from './pages/Topic4';
import Gallery from './pages/Gallery';

export default function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/topic-1" element={<Topic1 />} />
        <Route path="/topic-2" element={<Topic2 />} />
        <Route path="/topic-3" element={<Topic3 />} />
        <Route path="/topic-4" element={<Topic4 />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </AnimatePresence>
  );
}

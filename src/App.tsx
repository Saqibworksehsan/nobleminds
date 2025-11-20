import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Leadership from './pages/Leadership';
import WhyNobleMinds from './pages/WhyNobleMinds';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {
  const initial = (typeof window !== 'undefined' && window.location.hash) ? window.location.hash.replace('#', '') : 'home';
  const [currentPage, setCurrentPage] = useState(initial || 'home');

  // sync scrolling on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // listen to hash changes so direct links work
  useEffect(() => {
    const onHash = () => {
      const h = window.location.hash.replace('#', '') || 'home';
      setCurrentPage(h);
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'services':
        return <Services />;
      case 'leadership':
        return <Leadership />;
      case 'blog':
        return <Blog />;
      case 'contact':
        return <Contact />;
      case 'why':
        return <WhyNobleMinds />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <div className="pt-20">
        {renderPage()}
      </div>
      <Footer />
    </div>
  );
}

export default App;

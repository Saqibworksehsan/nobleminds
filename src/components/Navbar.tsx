import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Our Services' },
    { id: 'why', label: 'Why Noble Minds' },
  ];

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setIsOpen(false);
  };

  return (
    <nav className="bg-slate-900 shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo + Star */}
          <div
            className="flex items-center gap-3 px-4 cursor-pointer"
            onClick={() => handleNavigate("home")}
          >
            <img
              src="./logo4.png"
              alt="Noble Minds"
              className="h-10 sm:h-14 lg:h-16 w-auto object-contain"
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`relative px-3 py-2 text-sm font-medium transition-colors
                  ${
                    currentPage === item.id
                      ? "text-emerald-400"
                      : "text-gray-300 hover:text-emerald-300"
                  }`}
              >
                {item.label}
                {currentPage === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-400 rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-300 hover:text-emerald-300 hover:bg-slate-800"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700">
          <div className="px-2 pt-2 pb-4 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium
                  ${
                    currentPage === item.id
                      ? "bg-emerald-900/50 text-emerald-300"
                      : "text-gray-300 hover:bg-slate-700 hover:text-emerald-300"
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
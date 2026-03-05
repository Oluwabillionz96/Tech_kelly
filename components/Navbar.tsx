import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { useContactNavigation } from "@/hooks/useContactNavigation";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { navigateToContact } = useContactNavigation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false); // Close mobile menu if open
    navigateToContact();
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/projects" },
    { name: "Experience", path: "/cv" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black border-b py-4" : "py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <Logo
            size={40}
            className="transition-transform group-hover:scale-110"
          />
          <span className="text-xl font-bold tracking-[0.2em] font-display uppercase">
            <span className="hidden md:inline">Tech</span> Kelly
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-xs font-bold tracking-[0.2em] uppercase transition-colors hover:text-primary relative py-2 ${
                location.pathname === link.path
                  ? "text-primary"
                  : "text-zinc-500"
              }`}
            >
              {link.name}
              {location.pathname === link.path && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary"></span>
              )}
            </Link>
          ))}
          <button
            onClick={handleContactClick}
            className="bg-primary text-black px-6 py-2.5 font-bold rounded-full text-xs uppercase tracking-widest hover:bg-primary/80 transition-colors"
          >
            Let's Talk
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-zinc-400 p-2 glass rounded-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-[88px] bg-black z-40 md:hidden flex flex-col p-10 gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-4xl font-bold font-display tracking-tighter hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={handleContactClick}
            className="mt-6 w-full bg-primary text-black text-center py-5 rounded-2xl font-bold text-xl uppercase tracking-widest"
          >
            Hire Me
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

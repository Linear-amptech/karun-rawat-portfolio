import React from "react";
import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { scrollToMainContentArea } from "../utils/scrollToMainContent";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // Full navigation names as originally provided
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about-me", label: "About Me" },
    { path: "/research-technology", label: "Research & Development" },
    { path: "/publications", label: "Publications & Patents" },
    { path: "/training-workshops", label: "News & Events" },
    { path: "/team-members", label: "Team & Members" },
    { path: "/industry-corner", label: "Industry Corner" },
    { path: "/student-corner", label: "Student Prospectus" }
  ];

  return (
    <>
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#02458A]/95 backdrop-blur-md shadow-2xl border-b border-blue-400/30' 
          : 'bg-[#02458A] border-b border-[#02458A] shadow-md'
      }`}>
        <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo Section */}
            <NavLink 
              to="/" 
              className="flex-shrink-0 group transition-all duration-300 hover:scale-105"
              onClick={() => scrollToMainContentArea()}
            >
              <div className="relative">
                <img
                  className={`h-10 w-auto transition-all duration-300 group-hover:brightness-125 group-hover:drop-shadow-lg ${
                    isScrolled ? 'drop-shadow-md' : ''
                  }`}
                  src={require("../assets/iitrLogo.png")}
                  alt="IITR Logo"
                />
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-white/10 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-150"></div>
              </div>
            </NavLink>

            {/* Desktop Navigation - Compact spacing for full names */}
            <nav className="hidden lg:flex lg:items-center">
              <div className="flex items-center space-x-0.5 xl:space-x-1">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className={`relative px-2 xl:px-3 py-2 text-xs xl:text-sm font-medium rounded-md transition-all duration-300 group overflow-hidden whitespace-nowrap ${
                        isActive
                          ? isScrolled 
                            ? 'text-white bg-white/25 shadow-lg border border-white/20' 
                            : 'text-white bg-white/20 shadow-md'
                          : isScrolled
                            ? 'text-white hover:text-white hover:bg-white/15 hover:shadow-md'
                            : 'text-white/90 hover:text-white hover:bg-white/10'
                      }`}
                      onClick={() => scrollToMainContentArea()}
                    >
                      <span className="relative z-10">{item.label}</span>
                      
                      {/* Active indicator */}
                      {isActive && (
                        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                      )}
                      
                      {/* Hover effect */}
                      <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                      
                      {/* Shine effect */}
                      <span className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-full transition-all duration-700 transform skew-x-12"></span>
                    </NavLink>
                  );
                })}
              </div>
              
              {/* Enhanced Contact Button */}
              <div className="ml-3 xl:ml-4">
                <NavLink
                  to="/contact"
                  className={`relative inline-flex items-center px-4 xl:px-6 py-2 xl:py-2.5 text-xs xl:text-sm font-bold transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 group overflow-hidden rounded-lg shadow-lg hover:shadow-xl border ${
                    isScrolled
                      ? 'text-[#02458A] bg-gradient-to-r from-white via-blue-50 to-white border-blue-200/50'
                      : 'text-[#02458A] bg-gradient-to-r from-white via-gray-50 to-white border-white/20'
                  }`}
                  onClick={() => scrollToMainContentArea()}
                >
                  {/* Animated background with scroll-aware colors */}
                  <span className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                    isScrolled
                      ? 'bg-gradient-to-r from-orange-100 via-yellow-50 to-orange-100'
                      : 'bg-gradient-to-r from-orange-100 via-amber-50 to-orange-100'
                  }`}></span>
                  
                  {/* Button content */}
                  <span className="relative flex items-center z-10">
                    <svg 
                      className="w-3 xl:w-4 h-3 xl:h-4 mr-1.5 xl:mr-2 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className={`transition-colors duration-300 ${
                      isScrolled 
                        ? 'group-hover:text-orange-700' 
                        : 'group-hover:text-orange-600'
                    }`}>Contact</span>
                  </span>
                  
                  {/* Enhanced shine effect */}
                  <span className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:left-full transition-all duration-700 transform skew-x-12"></span>
                  
                  {/* Pulsing glow */}
                  <span className="absolute inset-0 bg-orange-200/20 rounded-lg opacity-0 group-hover:opacity-100 animate-pulse transition-all duration-300"></span>
                </NavLink>
              </div>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={handleClick}
              className="lg:hidden p-2 rounded-lg text-white hover:text-white hover:bg-white/10 transition-all duration-200"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 relative">
                <span className={`absolute top-1.5 left-0 w-6 h-0.5 bg-current rounded-full transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}></span>
                <span className={`absolute top-2.5 left-0 w-6 h-0.5 bg-current rounded-full transition-all duration-200 ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`absolute top-3.5 left-0 w-6 h-0.5 bg-current rounded-full transition-all duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'max-h-screen opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="bg-[#02458A]/98 backdrop-blur-lg border-t border-blue-400/20 shadow-lg">
            <div className="max-w-[1400px] mx-auto px-4 py-4 space-y-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-white bg-white/20 border-l-4 border-white shadow-md'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                    onClick={() => {
                      handleClick();
                      scrollToMainContentArea();
                    }}
                  >
                    {item.label}
                  </NavLink>
                );
              })}
              
              {/* Mobile Contact Button */}
              <NavLink
                to="/contact"
                className="block mt-4 px-4 py-3 text-center text-base font-bold text-[#02458A] bg-gradient-to-r from-white via-gray-50 to-white hover:from-orange-100 hover:via-amber-50 hover:to-orange-100 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20"
                onClick={() => {
                  handleClick();
                  scrollToMainContentArea();
                }}
              >
                Contact Us
              </NavLink>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden z-40"
          onClick={handleClick}
        ></div>
      )}
    </>
  );
};

export default Header;
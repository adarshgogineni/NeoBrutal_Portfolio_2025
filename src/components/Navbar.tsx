import { useState, useEffect } from 'react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const isDark = savedTheme === 'dark';
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 border-b-4 md:border-b-8 border-black dark:border-neon-green z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="font-jetbrains font-extrabold text-base sm:text-xl md:text-2xl">
            <span className="bg-neon-pink dark:bg-neon-purple border-2 border-black dark:border-neon-green px-2 sm:px-3 py-1 rotate-[-2deg] inline-block shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(232,255,168,1)] hover:rotate-0 hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(232,255,168,1)] transition-all cursor-pointer dark:text-white">
              Adarsh Gogineni's Portfolio
            </span>
          </a>

          {/* Dark Mode Toggle & Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={darkMode}
                onChange={toggleDarkMode}
                className="sr-only peer"
              />
              <div
                className="
                  w-11 h-6
                  bg-gray-400
                  rounded-full
                  border-2 border-black
                  peer-checked:bg-neon-pink
                  peer-checked:shadow-[2px_2px_0px_rgba(0,0,0,1)]
                  after:content-['']
                  after:absolute
                  after:top-[4px]
                  after:left-[4px]
                  after:w-4
                  after:h-4
                  after:bg-white
                  after:rounded-full
                  after:border-2
                  after:border-black
                  after:transition-all
                  peer-checked:after:translate-x-5
                "
              ></div>
              <span className="ms-2 text-sm font-k2d font-bold">
                {darkMode ? '🌙' : '☀️'}
              </span>
            </label>

            {/* Navigation Items */}
            <div className="flex space-x-1 lg:space-x-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-k2d font-extrabold text-lg lg:text-xl px-4 lg:px-6 py-2 border-2 border-black dark:border-neon-green bg-white dark:bg-gray-800 dark:text-white hover:bg-neon-green dark:hover:bg-neon-purple transition-all hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(232,255,168,1)]"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 border-2 border-black dark:border-neon-green bg-neon-pink dark:bg-neon-purple hover:bg-neon-green dark:hover:bg-neon-green transition-colors dark:text-white"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t-4 border-black dark:border-neon-green bg-white dark:bg-gray-900 transition-colors">
          <div className="flex flex-col space-y-2 p-4">
            {/* Dark Mode Toggle - Mobile */}
            <div className="flex items-center justify-center pb-2">
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={darkMode}
                  onChange={toggleDarkMode}
                  className="sr-only peer"
                />
                <div
                  className="
                    w-11 h-6
                    bg-gray-400
                    rounded-full
                    border-2 border-black
                    peer-checked:bg-neon-pink
                    peer-checked:shadow-[2px_2px_0px_rgba(0,0,0,1)]
                    after:content-['']
                    after:absolute
                    after:top-[4px]
                    after:left-[4px]
                    after:w-4
                    after:h-4
                    after:bg-white
                    after:rounded-full
                    after:border-2
                    after:border-black
                    after:transition-all
                    peer-checked:after:translate-x-5
                  "
                ></div>
                <span className="ms-2 text-sm font-k2d font-bold dark:text-white">
                  {darkMode ? '🌙 Dark' : '☀️ Light'}
                </span>
              </label>
            </div>

            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="font-k2d font-extrabold text-lg px-4 py-3 border-2 border-black dark:border-neon-green bg-white dark:bg-gray-800 dark:text-white hover:bg-neon-green dark:hover:bg-neon-purple transition-all text-center"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

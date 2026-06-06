import React from 'react';
import { useTheme } from '../design-system/ThemeProvider';

const SunIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const MoonIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

const ThemeToggle = ({ className = '' }) => {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative w-10 h-10 rounded-full flex items-center justify-center
        transition-all duration-300 hover:scale-105
        focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
        ${className}
      `}
      style={{ background: 'var(--surface-2)', border: '1px solid var(--border)' }}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <div className="relative w-5 h-5 text-primary-500">
        <div
          className={`
            absolute inset-0 transition-all duration-300 transform
            ${isDark ? 'rotate-0 opacity-100' : 'rotate-90 opacity-0'}
          `}
        >
          <MoonIcon />
        </div>
        <div
          className={`
            absolute inset-0 transition-all duration-300 transform
            ${isDark ? '-rotate-90 opacity-0' : 'rotate-0 opacity-100'}
          `}
        >
          <SunIcon />
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;
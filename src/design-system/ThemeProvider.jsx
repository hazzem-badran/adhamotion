import React, { createContext, useContext, useEffect, useState } from 'react';
import { themes } from './tokens';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio-theme');
      if (saved) return saved;
      // Adham's portfolio defaults to light (toggle to dark is available).
      return 'light';
    }
    return 'light';
  });

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const currentTheme = themes[theme];

  useEffect(() => {
    localStorage.setItem('portfolio-theme', theme);
    
    // Update document class for CSS
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    
    // Update CSS custom properties
    const root = document.documentElement;
    root.style.setProperty('--bg-primary', currentTheme.background.primary);
    root.style.setProperty('--bg-secondary', currentTheme.background.secondary);
    root.style.setProperty('--bg-glass', currentTheme.background.glass);
    root.style.setProperty('--text-primary', currentTheme.text.primary);
    root.style.setProperty('--text-secondary', currentTheme.text.secondary);
    root.style.setProperty('--text-muted', currentTheme.text.muted);
    root.style.setProperty('--border-primary', currentTheme.border.primary);
    root.style.setProperty('--border-secondary', currentTheme.border.secondary);
  }, [theme, currentTheme]);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      if (!localStorage.getItem('portfolio-theme')) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const value = {
    theme,
    currentTheme,
    toggleTheme,
    isDark: theme === 'dark',
    isLight: theme === 'light',
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
import React, { createContext, useContext, useEffect, useState } from 'react';

// Create ThemeContext
const ThemeContext = createContext();

// Custom hook to use the ThemeContext
export const useTheme = () => useContext(ThemeContext);

// ThemeProvider component
export const ThemeProvider = ({ children }) => {
    // Initialize theme state, check localStorage for a saved theme or default to 'light'
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

    // Update the theme in localStorage and add it as a data attribute on the body
    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    // Toggle between 'light' and 'dark' themes
    const toggleTheme = () => {
        console.log('theme switched');
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    // Provide theme and toggleTheme function to children components
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

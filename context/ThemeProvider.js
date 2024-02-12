import React from "react";
import { useState } from "react";
import { ThemeContext } from "./ThemeContext";

function ThemeProvider({ children }) {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {setIsDarkMode(prevDarkMode => !prevDarkMode)}

    return (
        <ThemeContext.Provider value = {{isDarkMode, toggleDarkMode}}>
        {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;
import React, { createContext, useContext, useState } from 'react';

const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
	const [darkMode, setDarkMode] = useState(localStorage.theme === 'light' ? false : true);

	const toggleDarkMode = () => {
		const newMode = !darkMode;
		localStorage.theme = newMode ? 'dark' : 'light';
		document.documentElement.classList.toggle('dark', newMode);
		setDarkMode(newMode);
	};

	return (
		<DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
			{children}
		</DarkModeContext.Provider>
	);
}

export function useDarkMode() {
	return useContext(DarkModeContext);
}

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDarkMode } from './DarkModeContext';

export default function Header() {
	const path = useLocation().pathname;
	const sections = path.split('/').filter((section) => section !== '');
	const { darkMode, toggleDarkMode } = useDarkMode();

	return (
		<>
			<nav className='flex items-center justify-between w-full mb-3 md:p-3 px-2 md:px-20'>
				<h2 className='font-bold text-sm md:text-xl '>
					<div>
						<Link to="/" className='hover:underline'>tprat.fr</Link>
						{sections.map((section, index) => (
							<Link className='hover:underline' key={index} to={`/${section}`}>/{section}</Link>
						))}
					</div>
				</h2>
				<div onClick={toggleDarkMode} className='p-2 rounded-full h-14 w-14 hover:cursor-pointer hover:animate-spin-slow hover:ring-2 hover:ring-vert-500 active:bg-vert-200 dark:hover:ring-gris-100 dark:active:bg-gris-300'>
					{darkMode ? (
						<svg fill='currentColor' viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
							<path className='' d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
						</svg>
					) : (
						<svg fill='currentColor' viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
							<path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0a4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
						</svg>
					)}
				</div >
			</nav >
		</>
	);
}

import React, { useEffect } from 'react'

export default function Header() {
	const [colorTheme, setColorTheme] = useEffect(localStorage.theme);
	function darkSwitch() {
		if (localStorage.theme === 'light') {
			localStorage.theme = 'dark'
			document.documentElement.classList.add('dark')
		} else {
			localStorage.theme = 'light'
			document.documentElement.classList.remove('dark')
		}
	}
	return (
		<nav className='w-full flex p-3 items-center px-20'>
			<h1 className='text-xl'>Titouan PRAT</h1>
			<div className='grow'></div>
			<div className='flex mr-10'>
				<a className='mx-5'>Accueil</a>
				<a className='mx-5'>Projets</a>
			</div>
			<div className=' h-10 w-10 m-3 rounded-full'>
				{colorTheme == "light" ?
					<svg onClick={darkSwitch} className="w-9 h-9 bg-center hover:text-slate-900" fill='currentColor' viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
						<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
					</svg>
					:
					<svg onClick={darkSwitch} className="w-9 h-9 bg-center hover:text-slate-100" fill='currentColor' viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
						<path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
					</svg>
				}
			</div>
		</nav>
	)
}
import React from 'react'
import { useDarkMode } from './DarkModeContext'

export default function Mountain({ altitude = 0 }) {
	return (
		<svg className='absolute bottom-0 z-10 pointer-events-none' id="visual" viewBox="1 0 880 580" xmlns="http://www.w3.org/2000/svg" version="1.1">
			{altitude > 3 &&
				<path className='cursor-auto pointer-events-auto dark:fill-gris-200 fill-vert-200 animate-slide-up-slow' d="M0 372L129 353L257 449L386 397L514 413L643 404L771 330L900 415L900 601L771 601L643 601L514 601L386 601L257 601L129 601L0 601Z"></path>
			}
			{altitude > 2 &&
				<path className='cursor-auto pointer-events-auto dark:fill-gris-300 fill-vert-300 animate-slide-up' d="M0 417L129 393L257 395L386 469L514 464L643 435L771 405L900 506L900 601L771 601L643 601L514 601L386 601L257 601L129 601L0 601Z"></path>
			}
			{altitude > 1 &&
				<path className='cursor-auto pointer-events-auto dark:fill-gris-400 fill-vert-400 animate-slide-up-fast' d="M0 475L129 501L257 524L386 429L514 519L643 452L771 498L900 479L900 601L771 601L643 601L514 601L386 601L257 601L129 601L0 601Z"></path>
			}
			<path className='cursor-auto pointer-events-auto dark:fill-gris-500 fill-vert-500' d="M0 535L129 567L257 572L386 537L514 546L643 574L771 593L900 578L900 601L771 601L643 601L514 601L386 601L257 601L129 601L0 601Z"></path>
		</svg>
	)
}

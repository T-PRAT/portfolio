import React from 'react'
import { useDarkMode } from './DarkModeContext'

export default function Mountain() {
	const { darkMode } = useDarkMode();
	if (darkMode)
		return (
			<svg className='absolute bottom-0 z-10 pointer-events-none' id="visual" viewBox="1 0 880 580" xmlns="http://www.w3.org/2000/svg" version="1.1">
				<path className='cursor-auto pointer-events-auto fill-gris-200 animate-slide-up-slow' d="M0 372L129 353L257 449L386 397L514 413L643 404L771 330L900 415L900 601L771 601L643 601L514 601L386 601L257 601L129 601L0 601Z"></path>
				<path className='cursor-auto pointer-events-auto fill-gris-300 animate-slide-up' d="M0 417L129 393L257 395L386 469L514 464L643 435L771 405L900 506L900 601L771 601L643 601L514 601L386 601L257 601L129 601L0 601Z"></path>
				<path className='cursor-auto pointer-events-auto fill-gris-400 animate-slide-up-fast' d="M0 475L129 501L257 524L386 429L514 519L643 452L771 498L900 479L900 601L771 601L643 601L514 601L386 601L257 601L129 601L0 601Z"></path>
				<path className='cursor-auto pointer-events-auto fill-gris-500' d="M0 535L129 567L257 572L386 537L514 546L643 574L771 593L900 578L900 601L771 601L643 601L514 601L386 601L257 601L129 601L0 601Z"></path>
			</svg>
		)
	else
		return (
			<svg className='absolute bottom-0 z-10 pointer-events-none' id="visual" viewBox="1 0 880 580" xmlns="http://www.w3.org/2000/svg" version="1.1">
				<path className='cursor-auto pointer-events-auto fill-bleu-200 animate-slide-up-slow' d="M0 372L129 353L257 449L386 397L514 413L643 404L771 330L900 415L900 601L771 601L643 601L514 601L386 601L257 601L129 601L0 601Z"></path>
				<path className='cursor-auto pointer-events-auto fill-bleu-300 animate-slide-up' d="M0 417L129 393L257 395L386 469L514 464L643 435L771 405L900 506L900 601L771 601L643 601L514 601L386 601L257 601L129 601L0 601Z"></path>
				<path className='cursor-auto pointer-events-auto fill-bleu-400 animate-slide-up-fast' d="M0 475L129 501L257 524L386 429L514 519L643 452L771 498L900 479L900 601L771 601L643 601L514 601L386 601L257 601L129 601L0 601Z"></path>
				<path className='cursor-auto pointer-events-auto fill-bleu-500' d="M0 535L129 567L257 572L386 537L514 546L643 574L771 593L900 578L900 601L771 601L643 601L514 601L386 601L257 601L129 601L0 601Z"></path>
			</svg>
		)
}

//<svg className='absolute bottom-0 z-10 object-fill pointer-events-none' id="visual" viewBox="0 0 540 960" width="540" height="960" xmlns="http://www.w3.org/2000/svg" version="1.1"><path d="M0 643L90 537L180 577L270 663L360 672L450 524L540 676L540 961L450 961L360 961L270 961L180 961L90 961L0 961Z" fill="#376282"></path><path d="M0 764L90 673L180 773L270 629L360 654L450 611L540 676L540 961L450 961L360 961L270 961L180 961L90 961L0 961Z" fill="#274960"></path><path d="M0 779L90 802L180 741L270 848L360 806L450 826L540 707L540 961L450 961L360 961L270 961L180 961L90 961L0 961Z" fill="#1a3140"></path><path d="M0 899L90 924L180 812L270 897L360 887L450 789L540 815L540 961L450 961L360 961L270 961L180 961L90 961L0 961Z" fill="#0e1b23"></path></svg>

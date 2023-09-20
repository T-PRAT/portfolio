import React from 'react'
import { Link } from 'react-router-dom'
import Typewriter from '../components/Typewriter'

export default function Hero() {
	return (
		<div id='home' className='m-12 md:m-24 z-30 absolute'>
			<Typewriter className='text-bleu-500 dark:text-gris-100 text-3xl sm:text-4xl md:text-7xl' text="Bienvenue sur mon portfolio" />
			<p className='text-xl sm:text-2xl md:text-4xl my-3'>Je vous présente <Link to="/projects" className='font-bold  underline'>mes projets</Link> et <Link to="/projects" className='font-bold underline'>qui je suis</Link></p>
		</div >
	)
}

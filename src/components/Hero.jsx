import React from 'react'
import { Link } from 'react-router-dom'
import Typewriter from './Typewriter'

export default function Hero() {
	return (
		<div id='home' className='m-12 md:m-32'>
			<Typewriter className='text-noir dark:text-creme text-3xl sm:text-4xl md:text-7xl' text="Bienvenue sur mon portfolio" />
			<p className='text-xl sm:text-2xl md:text-4xl my-3'>Je vous présente <Link to="/projects" className='font-bold  underline hover:drop-shadow-xl(0 3px 3px #ffff);'>mes projets</Link> et <Link to="/projects" className='font-bold underline'>qui je suis</Link></p>
		</div >
	)
}

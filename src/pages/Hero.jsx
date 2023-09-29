import React from 'react'
import { Link } from 'react-router-dom'
import Typewriter from '../components/Typewriter'
import Mountain from '../components/Mountain'

export default function Hero() {
	return (
		<>
			<div id='home' className='absolute z-30 m-12 md:m-24'>
				<Typewriter className='text-5xl text-color-500 dark:text-gris-100 sm:text-4xl md:text-7xl' text="Bienvenue sur mon portfolio" />
				<p className='my-3 text-3xl sm:text-2xl md:text-4xl'>Je vous présente <Link to="/projects" className='font-bold underline'>mes projets</Link> et <Link to="/about" className='font-bold underline'>qui je suis</Link></p>
			</div >
			<Mountain altitude={4} />
		</>
	)
}

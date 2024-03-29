import React from 'react'
import { Link } from 'react-router-dom'
import Typewriter from '../components/Typewriter'
import Mountain from '../components/Mountain'

export default function Home() {
	return (
		<>
			<div id='home' className='absolute z-30 m-12 md:m-24'>
				<Typewriter className='text-4xl text-vert-500 dark:text-gris-100 sm:text-6xl md:text-7xl' text="Bienvenue sur mon portfolio" />
				<p className='my-3 text-2xl sm:text-3xl md:text-4xl animate-fade-in'>Je vous présente <br className='block sm:hidden' /> <Link to="/projects" className='font-bold underline line'>mes différentes realisations</Link><br className='block sm:hidden' /> et découvrez <br className='block sm:hidden' /> <Link to="/about" className='font-bold underline'>qui je suis ?</Link></p>
			</div >
			<Mountain altitude={4} />
		</>
	)
}

import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
	return (
		<div id='home' className='m-32'>
			<h2 className='text-7xl'>Bienvenue sur mon portfolio</h2>
			<p className='text-4xl my-3'>Je vous présente <Link to="/projects" className='font-bold  underline hover:drop-shadow-xl(0 3px 3px #ffff);'>mes projets</Link> et <Link to="/projects" className='font-bold underline'>qui je suis</Link></p>
		</div>
	)
}

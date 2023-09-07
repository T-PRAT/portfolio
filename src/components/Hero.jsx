import React from 'react'

export default function Hero() {
	return (
		<div id='home' className='m-32'>
			<h2 className='text-7xl'>Bienvenue sur mon portfolio</h2>
			<p className='text-4xl my-3'>Je vous présente <a className='font-bold  underline hover:drop-shadow-xl(0 3px 3px #ffff);' href='#projects'>mes projets</a> et <a className='font-bold underline' href="">qui je suis</a></p>
		</div>
	)
}

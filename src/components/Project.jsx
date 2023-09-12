import React from 'react'

export default function Project({ title, desc, technos, link }) {
	return (
		<div className='m-3 border-2 border-marron hover:scale-105 inline-block'>
			<h3>{title}</h3>
			<p>{desc}</p>
			<p>{technos}</p>
			<a href={link}>Voir le projet</a>
		</div>
	)
}

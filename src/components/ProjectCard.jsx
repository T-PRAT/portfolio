import React from 'react'
import { Link } from 'react-router-dom'

export default function ProjectCard({ id, title, desc, technos, link }) {
	const descSubstringL = desc.substring(0, 70) + '...';
	return (
		<Link to={`${id}`} className="hover:transition scale-95 duration-200 border-4 border-vert-200 dark:border-gris-400 rounded-2xl  bg-vert-100 dark:bg-gris-500 hover:bg-opacity-40 dark:hover:bg-opacity-40 hover:scale-100 hover:border-vert-500 dark:hover:border-gris-200 backdrop-blur-sm" >
			<div className='flex space-x-2'>
				<img src={`/img/${id}.png`} alt={title} className='rounded-l-xl h-24 md:h-40' />
				<div className="flex flex-col text-xs md:text-base p-2">
					<h3 className="font-bold uppercase text-xs sm:text-l">{title}</h3>
					<p className=''>{descSubstringL}</p>
					<p className='italic hidden xl:block'>{technos}</p>
					<p href={link} className='hidden sm:block opacity-50'>{link}</p>
				</div>
			</div>
		</Link >
	)
}

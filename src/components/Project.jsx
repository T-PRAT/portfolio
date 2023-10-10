import React from 'react'

export default function Project({ id, title, desc, technos, link }) {
	return (
		<a href={link} className="hover:transition scale-95 duration-200 border-4 border-vert-200 dark:border-gris-400 rounded-2xl  bg-vert-100 dark:bg-gris-500 hover:bg-opacity-40 dark:hover:bg-opacity-40 hover:scale-100 hover:border-vert-500 dark:hover:border-gris-200 backdrop-blur-sm">
			<div className='flex space-x-2'>
				<img src={`/img/${id}.png`} alt={title} className='rounded-l-xl w-1/4 h-auto lg:w-1/3 h-auto' />
				<div className="flex flex-col text-xs md:text-base p-2">
					<h3 className="font-bold uppercase text-l">{title}</h3>
					<p className=''>{desc}</p>
					<p className='italic grow opacity-80'>{technos}</p>
					<p href={link} className='hidden opacity-50 sm:block'>{link}</p>
				</div>
			</div>
		</a>
	)
}

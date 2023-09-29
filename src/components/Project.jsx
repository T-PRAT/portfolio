import React from 'react'

export default function Project({ id, title, desc, technos, link }) {
	return (
		<a href={link} className="hover:transition duration-200 border-4 border-color-200 dark:border-gris-400 rounded-2xl  bg-color-100 dark:bg-gris-500 hover:bg-opacity-40 dark:hover:bg-opacity-40 hover:scale-95 hover:border-color-500 dark:hover:border-gris-200 backdrop-blur-sm">
			<div className='flex m-2 overflow-hidden'>
				<img src={`/img/${id}.png`} alt={title} className='w-1/3 h-1/3 rounded-l-xl' />
				<div className="flex flex-col mx-5 my-2 text-xs md:text-base">
					<h3 className="font-bold uppercase text-l">{title}</h3>
					<p className=''>{desc}</p>
					<p className='italic grow opacity-80'>{technos}</p>
					<p href={link} className='hidden opacity-50 sm:block'>{link}</p>
				</div>
			</div>
		</a>
	)
}

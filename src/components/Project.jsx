import React from 'react'

export default function Project({ id, title, desc, technos, link }) {
	return (
		/*<a className='flex m-3 border-2 dark:bg-noir bg-creme border-marron rounded-lg hover:bg-marron/50 dark:hover:bg-marron/50 p-5 w-2/3' href={link}>
			<img src={`/img/${id}.png`} alt={title} className='mr-5 w-1/2' />
			<div className='flex flex-col '>
				<h3 className='font-bold text-xl'>{title}</h3>
				<p>{desc}</p>
				<p className='italic grow'>{technos}</p>
				<a href={link} className='opacity-50'>{link}</a>
			</div>
		</a>*/
		<a href={link} class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
			<div classname="md:flex">
				<div class="md:shrink-0">
					<img src={`/img/${id}.png`} alt={title} className='h-48 w-full object-cover md:h-full md:w-42' />
				</div>
				<div class="p-8">
					<div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{title}</div>
					<p className=''>{desc}</p>
					<p className='italic grow'>{technos}</p>
					<a href={link} className='opacity-50'>{link}</a>
				</div>
			</div>
		</a>
	)
}

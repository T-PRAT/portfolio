import React from 'react'

export default function Project({ id, title, desc, technos, link }) {
	return (
		<a href={link} class="hover:transition duration-200 border-4 border-bleu-200 dark:border-gris-400 rounded-2xl m-5 bg-bleu-100 dark:bg-gris-500 hover:bg-opacity-40 dark:hover:bg-opacity-40 hover:scale-95 hover:border-bleu-500 dark:hover:border-gris-200 backdrop-blur-sm">
			<div className='flex m-2 overflow-hidden rounded-xl'>
				<img src={`/img/${id}.png`} alt={title} className='w-1/3 min-w-42 aspect-auto' />
				<div class="flex flex-col mx-5 my-2 text-xs md:text-base">
					<h3 classname="font-bold uppercase text-l">{title}</h3>
					<p className=''>{desc}</p>
					<p className='italic grow opacity-80'>{technos}</p>
					<a href={link} className='hidden opacity-50 sm:flex'>{link}</a>
				</div>
			</div>
		</a>
	)
}

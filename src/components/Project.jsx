import React from 'react'

export default function Project({ id, title, desc, technos, link }) {
	return (
		<a href={link} class="hover:transition duration-200 border-2 border-bleu-200 flex rounded-2xl m-5 overflow-hidden bg-bleu-100 dark:bg-bleu-500 hover:bg-opacity-40 dark:hover:bg-opacity-40 hover:scale-95 hover:border-bleu-500 dark:hover:border-creme">
			<img src={`/img/${id}.png`} alt={title} className='min-w-42 w-1/3 aspect-auto' />
			<div class="flex flex-col mx-5 my-2 text-xs md:text-base">
				<h3 classname="uppercase text-l  font-bold">{title}</h3>
				<p className=''>{desc}</p>
				<p className='italic grow opacity-80'>{technos}</p>
				<a href={link} className='opacity-50 hidden sm:flex'>{link}</a>
			</div>
		</a>
	)
}

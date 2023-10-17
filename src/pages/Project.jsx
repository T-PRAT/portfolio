import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import Mountain from '../components/Mountain';
import Typewriter from '../components/Typewriter';
import { projectsData } from '../content/projects';

export default function Project() {
	const { id } = useParams();

	const project = projectsData.find((project) => project.id === id);
	if (project) {
		return (
			<>
				<div className='mx-8 md:mx-24 md:my-12 absolute z-30 px-0 md:px-12 lg:px-24'>
					<h2>
						<Typewriter className='mb-10 text-3xl md:text-4xl text-center md:text-left' text={project.title} />
					</h2>
					<div className='flex flex-wrap text-sm sm:text-base p-4 border-4 border-vert-200 dark:border-gris-400 rounded-2xl bg-vert-100/40 dark:bg-gris-500/40 backdrop-blur-sm hover:cursor-pointer'>
						<div className="text-md md:text-lg max-w-4xl flex flex-col gap-2 mb-7">
							<p className='leading-relaxed indent-2'>{project.desc}</p>
							<div className='py-2'>
								<p>Technos utilisées :</p>
								<p className='italic'>{project.technos}</p>
							</div>
							<a href={project.link} className='hover:fill-gris-300 flex gap-1 hover:underline hover:opacity-70'>
								{project.link}
								<svg className='h-8 ' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
									<path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
								</svg>
							</a>
						</div>
						<img className='h-40 md:h-64 rounded-xl backdrop-blur-[3px] m-2 mx-auto' src={`/img/${project.id}.png`} alt={project.title} />
					</div>
				</div>
				<Mountain altitude={3} />
			</>
		)
	} else {
		return <Navigate to='/projects' />
	}
}

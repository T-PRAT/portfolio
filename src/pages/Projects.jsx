import React from 'react'
import { projectsList } from '../content/projects'
import Project from '../components/Project';
import Typewriter from '../components/Typewriter';
import Mountain from '../components/Mountain';

export default function Projects() {
	const projects = projectsList;
	return (
		<>
			<div id="projects" className='absolute z-30 m-4 md:m-12'>
				<Typewriter className='mb-10 text-3xl md:text-4xl text-center md:text-left px-0 lg:px-24' text="Mes différentes realisations" />
				<div className='grid w-full grid-cols-1 lg:grid-cols-2 h-2/4 space-y-4 lg:space-y-0 space-x-0 lg:space-x-4'>
					{projects.map((project) => (
						<Project key={project.id} {...project} />
					))}
				</div>
				<p className='text-md m-3 px-0 lg:px-24 text-xl'>Et plus sur mon <a className='underline' href="https://github.com/T-PRAT">github</a>...</p>
			</div>
			<Mountain altitude={3} />
		</>
	)
}

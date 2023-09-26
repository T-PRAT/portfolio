import React from 'react'
import { projectsList } from '../content/projects'
import Project from '../components/Project';
import Typewriter from '../components/Typewriter';
import Mountain from '../components/Mountain';

export default function Projects() {
	const projects = projectsList;
	return (
		<>
			<div id="projects" className='absolute z-30 m-5 lg:m-20'>
				<Typewriter className='mb-10 text-4xl text-center md:text-left' text="Mes différentes realisations" />
				<div className='grid w-full grid-cols-1 lg:grid-cols-2 h-2/4'>
					{projects.map((project) => (
						<Project key={project.id} {...project} />
					))}
				</div>
			</div>
			<Mountain altitude={3} />
		</>
	)
}

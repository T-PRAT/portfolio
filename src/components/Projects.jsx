import React from 'react'
import { projectsList } from '../content/projects'
import Project from './Project';
import Typewriter from './Typewriter';

export default function Projects() {
	const projects = projectsList;
	return (
		<div id="projects" className='m-5 lg:m-20'>
			<Typewriter className='text-4xl mb-10 text-center md:text-left' text="Mes différentes realisations" />
			<div className='grid grid-cols-1 lg:grid-cols-2 w-full h-2/4'>
				{projects.map((project) => (
					<Project key={project.id} {...project} />
				))}
			</div>
		</div>
	)
}

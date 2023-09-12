import React from 'react'
import { projectsList } from '../content/projects'
import Project from './Project';

export default function Projects() {
	const projects = projectsList;
	return (
		<div id="projects" className='m-20'>
			<h2 className='text-5xl'>Mes différentes réalisations</h2>
			<div className='relative flex items-center'>
				<div className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
					{projects.map((project) => (
						<Project key={project.id} {...project} />
					))}
				</div>
			</div>
		</div>
	)
}

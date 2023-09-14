import React from 'react'
import { projectsList } from '../content/projects'
import Project from './Project';

export default function Projects() {
	const projects = projectsList;
	return (
		<div id="projects" className='m-20'>
			<h2 className='text-5xl mb-10'>Mes différentes réalisations</h2>
			<div className='relative items-center'>
				<div className='flex w-full h-96'>
					{projects.map((project) => (
						<Project key={project.id} {...project} />
					))}
				</div>
			</div>
		</div>
	)
}

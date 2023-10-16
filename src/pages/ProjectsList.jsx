import React from 'react'
import { projectsData } from '../content/projects'
import ProjectCard from '../components/ProjectCard';
import Typewriter from '../components/Typewriter';
import Mountain from '../components/Mountain';

export default function ProjectsList() {
	const projects = projectsData;
	return (
		<>
			<div className='mx-8 md:mx-24 md:my-12 absolute z-30 px-0 md:px-12 lg:px-24'>
				<h2>
					<Typewriter className='mb-10 text-3xl md:text-4xl text-center md:text-left' text="Mes différentes realisations" />
				</h2>
				<div className='grid w-full grid-cols-1 lg:grid-cols-2 h-2/4 space-y-4 lg:space-y-0 space-x-0 lg:space-x-4'>
					{projects.map((project) => (
						<ProjectCard key={project.id} {...project} />
					))}
				</div>
				<p className='text-md m-3 px-0 lg:px-24 text-xl'>Et plus sur mon <a className='underline' href="https://github.com/T-PRAT">github</a>...</p>
			</div>
			<Mountain altitude={3} />
		</>
	)
}

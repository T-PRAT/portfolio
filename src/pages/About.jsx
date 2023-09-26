import React from 'react'
import { useState } from 'react';
import Mountain from '../components/Mountain';

export default function About() {
	return (
		<>
			<div className='absolute z-30 container lg:px-24 lg:py-12'>
				<div className="flex">
					<img className=' w-1/3 grayscale rounded-full border-4 backdrop-blur-[3px]' src="/img/titouan_prat.png" alt="Titouan Prat" />
					<p>Salut, moi c'est Titouan Prat.<br />Je suis un développeur web.<br />je suis passionné par le développement web, je conçois des sites web et je développe des applications web.<br /></p>
				</div>
			</div>
			<Mountain altitude={2} />
		</>
	)
}

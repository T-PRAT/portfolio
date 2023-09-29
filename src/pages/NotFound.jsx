import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Mountain from '../components/Mountain'

export default function NotFound() {
	const navigate = useNavigate()

	useEffect(() => {
		setTimeout(() => {
			navigate('/')
		}, 2000)
	})
	return (
		<>
			<h2 className='m-20 text-3xl text-center text-vert-400 dark:text-gris-100'>Cette page est introuvable. Redirection...</h2>
			<Mountain altitude={3} />
		</>
	)
}

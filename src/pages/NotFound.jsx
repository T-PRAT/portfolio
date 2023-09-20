import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
	const navigate = useNavigate()

	useEffect(() => {
		setTimeout(() => {
			navigate('/')
		}, 2000)
	})
	return (
		<h2 className='m-20 text-center text-gris-100'>Cette page est introuvable. Redirection...</h2>
	)
}

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
		<h2 className='text-center text-creme m-20'>Cette page est introuvable. Redirection...</h2>
	)
}

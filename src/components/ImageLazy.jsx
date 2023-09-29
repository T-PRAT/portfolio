import React, { useEffect, useState } from 'react'

export default function ImageLazy({ src, alt, className }) {
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		const img = new Image()
		img.src = src
		img.onload = () => setLoaded(true)
	}, [src]);

	return (
		<>
			<img
				src={`/img/${src}-small.png`}
				alt={alt}
				className={`${className} object-fill`}
				loading="lazy"
				style={{ display: loaded ? 'inline' : 'none' }}
			/>
			<img
				src={`/img/${src}.png`}
				alt={alt}
				className={`${className}`}
				style={{ display: loaded ? 'none' : 'inline' }}
			/>
		</>
	)
}

import React, { useCallback } from "react"
import Particles from "react-tsparticles"
import particlesConfigDark from "./config/particles-config-dark"
import particlesConfigLight from "./config/particles-config-light"
import { loadSlim } from "tsparticles-slim";

export default function ParticleBackground() {
	const particlesInit = useCallback(async engine => {
		console.log(engine);
		// you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		//await loadFull(engine);
		await loadSlim(engine);
	}, []);

	const particlesLoaded = useCallback(async container => {
		await console.log(container);
	}, []);

	return (
		<Particles
			id="tsparticles"
			height="100%"
			width="100%"
			position="fixed"
			zIndex="-1"
			init={particlesInit}
			loaded={particlesLoaded}
			options={particlesConfigDark}
		/>
	);
};

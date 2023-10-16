import React, { useCallback } from "react"
import Particles from "react-tsparticles"
import { darkTheme, lightTheme } from "./config/particles-config"
import { loadSlim } from "tsparticles-slim";
import { useDarkMode } from "./DarkModeContext";

export default function ParticleBackground() {
	const { darkMode } = useDarkMode();
	const particlesInit = useCallback(async engine => {
		await loadSlim(engine);
	}, []);

	const particlesLoaded = useCallback(async container => {
	}, []);

	const selectedTheme = darkMode ? darkTheme : lightTheme;

	return (
		<Particles
			id="tsparticles"
			init={particlesInit}
			loaded={particlesLoaded}
			options={selectedTheme}
			className="z-0"
		/>
	);
};

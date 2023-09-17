const lightTheme = {
	particles: {
		color: {
			value: "#000000"
		},
		number: {
			value: 80,
			density: {
				enable: true,
				value_area: 800
			}
		},
		opacity: {
			value: 0.5,
			random: true,
			anim: {
				enable: false,
				speed: 1,
				opacity_min: 0.1,
				sync: false
			}
		},
		size: {
			value: 6,
			random: true,
			anim: {
				enable: false,
				speed: 10,
				size_min: 0.1,
				sync: false
			}
		},
		move: {
			enable: true,
			speed: 1.2,
			direction: "bottom",
			random: false,
			straight: false,
			out_mode: "out",
			bounce: false,
			attract: {
				enable: false,
				rotateX: 600,
				rotateY: 1200
			}
		}
	},
	interactivity: {
		detect_on: "window",
		events: {
			onhover: {
				enable: true,
				mode: "grab"
			},
			onclick: {
				enable: true,
				mode: "repulse"
			},
			resize: true
		},
		modes: {
			grab: {
				distance: 300,
				line_linked: {
					opacity: 0.5,
					color: "#000000"
				}
			},
			bubble: {
				distance: 400,
				size: 4,
				duration: 0.3,
				opacity: 1,
				speed: 3
			},
			repulse: {
				distance: 200,
				duration: 0.4
			},
			push: {
				particles_nb: 4
			},
			remove: {
				particles_nb: 2
			}
		}
	},

	retina_detect: true
};

const darkTheme = {
	particles: {
		color: {
			value: "#EAE0D5"
		},
		number: {
			value: 80,
			density: {
				enable: true,
				value_area: 800
			}
		},
		opacity: {
			value: 0.5,
			random: true,
			anim: {
				enable: false,
				speed: 1,
				opacity_min: 0.1,
				sync: false
			}
		},
		size: {
			value: 6,
			random: true,
			anim: {
				enable: false,
				speed: 10,
				size_min: 0.1,
				sync: false
			}
		},
		move: {
			enable: true,
			speed: 1.2,
			direction: "bottom",
			random: false,
			straight: false,
			out_mode: "out",
			bounce: false,
			attract: {
				enable: false,
				rotateX: 600,
				rotateY: 1200
			}
		}
	},
	interactivity: {
		detect_on: "window",
		events: {
			onhover: {
				enable: true,
				mode: "grab"
			},
			onclick: {
				enable: true,
				mode: "repulse"
			},
			resize: true
		},
		modes: {
			grab: {
				distance: 300,
				line_linked: {
					opacity: 0.5
				}
			},
			bubble: {
				distance: 400,
				size: 4,
				duration: 0.3,
				opacity: 1,
				speed: 3
			},
			repulse: {
				distance: 200,
				duration: 0.4
			},
			push: {
				particles_nb: 4
			},
			remove: {
				particles_nb: 2
			}
		}
	},
	retina_detect: true
};

export { lightTheme, darkTheme };

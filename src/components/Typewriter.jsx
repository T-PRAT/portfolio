import React, { useEffect, useState } from "react";

const Typewriter = ({ text, className }) => {
	const [displayText, setDisplayText] = useState("");
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			if (currentIndex < text.length) {
				setDisplayText((prevText) => prevText + text[currentIndex]);
				setCurrentIndex((prevIndex) => prevIndex + 1);
			}
		}, 30); // Adjust the typing speed here (in milliseconds)

		return () => clearInterval(interval);
	}, [currentIndex, text]);

	return (
		<div className={`${className}`} >
			{displayText}
			< span className="animate-blink" >_</ span>
		</div >
	);
};

export default Typewriter;

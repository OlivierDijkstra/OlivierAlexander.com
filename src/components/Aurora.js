import React, { useContext, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { AuroraContext } from 'context/AuroraContext';

export default function Aurora() {
	const { aurora } = useContext(AuroraContext);

	const auroraRef = useRef();

	useEffect(() => {
		auroraRef.current.style.transform = `translate3d(
			${aurora.x / 28}px, 
			${aurora.y / 28}px, 
			0px)`;
	}, [aurora]);

	return (
		<div className="aurora">
			<div ref={auroraRef}>
				<motion.img
					animate={{
						rotateZ: [210, 330, 210, 340, 210],
						rotateX: [0, 50, 0, 25, 0],
						opacity: [0.4, 0.2, 0.3, 0.6, 0.4]
					}}
					transition={{ duration: 60, repeat: Infinity }}
					src="/aurora.png"
				/>
			</div>
		</div>
	);
}

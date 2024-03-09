import React, { useEffect, useRef, useState } from 'react'

type scrollDirectionType = 'up' | 'down'

const useScrollDirection = ({
	initialDirection,
}: {
	initialDirection: scrollDirectionType
}) => {
	const [scrollDirection, setScrollDirection] = useState(initialDirection)
	const [prevOffset, setPrevOffset] = useState(0)

	const toggleScrollDirection = () => {
		let scrollY = window.scrollY

		if (scrollY === 0) {
			setScrollDirection('up')
		} else if (scrollY > prevOffset) {
			setScrollDirection('down')
		} else {
			setScrollDirection('up')
		}

		setPrevOffset(scrollY)
	}

	useEffect(() => {
		window.addEventListener('scroll', toggleScrollDirection)

		return () => {
			window.removeEventListener('scroll', toggleScrollDirection)
		}
	})

	return scrollDirection
}

export default useScrollDirection

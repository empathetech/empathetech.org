import React, { useEffect, useRef, useState } from "react"
import styles from "./calendar.module.css"
import { debounce } from "@/utils/debounce"

export const Calendar = () => {
	const calendarWrapperRef = useRef<HTMLDivElement>(null)
	const [width, setWidth] = useState<number>(800)

	useEffect(() => {
		//set initial calendar width
		const containerWidth: number | null | undefined =
			calendarWrapperRef?.current?.offsetWidth
		if (containerWidth) {
			setWidth(containerWidth)
		}

		//set up debounced calendar resizing
		window.addEventListener(
			"resize",
			debounce(() => {
				if (calendarWrapperRef.current) {
					setWidth(calendarWrapperRef.current.offsetWidth)
				}
			}, 250)
		)
	}, [])

	return (
		<>
			<div ref={calendarWrapperRef} className={styles.calendarWrapper}>
				<div>
					<iframe
						src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FLos_Angeles&mode=MONTH&showPrint=0&showCalendars=1&showTitle=0&src=OG1pZXRhYmk4ZHFzNGhiMGxlNTFiYzcwOTBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%239E69AF"
						width={width}
						height="600"
					></iframe>
				</div>
			</div>
		</>
	)
}

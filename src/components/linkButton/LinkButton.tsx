import React from "react"
import { Button, RoleTypeMap } from "../button/Button"

type Props = {
	children: string | React.ReactNode
	link?: string
	onClick?: () => void
	ariaLabel?: string
	isExternal?: boolean
}

export const LinkButton: React.FC<Props> = ({
	link,
	children,
	ariaLabel,
	onClick,
	isExternal = false,
}) => {
	return (
		<a
			href={link}
			aria-label={ariaLabel}
			{...(isExternal ? { target: "_blank" } : {})}
		>
			<Button role={RoleTypeMap.LINK} onClick={onClick}>
				{children}
			</Button>
		</a>
	)
}

import React from "react"
import { render } from "@testing-library/react"
import { Chance } from "chance"
import { HomePageHeader } from "./HomePageHeader"

describe("GitHubLink component", () => {
	const chance = new Chance()
	const subTitle: string = chance.string()

	it("should render with title and subtitle", () => {
		const { getByText } = render(<HomePageHeader subTitle={subTitle} />)

		expect(getByText(subTitle)).toBeInTheDocument
	})
})

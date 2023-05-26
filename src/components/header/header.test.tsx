import React from "react"
import { render } from "@testing-library/react"
import { Chance } from "chance"
import { Header } from "./Header"

describe("GitHubLink component", () => {
	const chance = new Chance()
	const title: string = chance.word()
	const subTitle: string = chance.string()

	it("should render with title", () => {
		const { getByText } = render(<Header title={title} />)

		expect(getByText(title)).toBeInTheDocument
	})

	it("should render with title and subtitle", () => {
		const { getByText } = render(<Header title={title} subTitle={subTitle} />)

		expect(getByText(title)).toBeInTheDocument
		expect(getByText(subTitle)).toBeInTheDocument
	})
})

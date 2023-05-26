import { render } from "@testing-library/react"
import { GitHubLink, GITHUB_BUTTON_TITLE } from "./GitHubLink"

describe("GitHubLink component", () => {
	it("should render", () => {
		const { getByText } = render(<GitHubLink link={"./"} />)

		expect(getByText(GITHUB_BUTTON_TITLE)).toBeInTheDocument
	})
})

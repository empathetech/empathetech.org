import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { Poppins } from "next/font/google"
import { Layout } from "@/components"

const poppins = Poppins({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
	style: ["normal", "italic"],
})

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div className={poppins.className}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</div>
	)
}

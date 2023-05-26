import "@/styles/globals.css"
import type { AppProps } from "next/app"
//replace with google font of choice
import { Poppins } from "next/font/google"

const poppins = Poppins({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
	style: ["normal", "italic"],
})

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div className={poppins.className}>
			<Component {...pageProps} />
		</div>
	)
}

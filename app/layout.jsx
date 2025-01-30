import dynamic from "next/dynamic";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
	title: "Pranjit | Portofolio",
	description:
		"My name is Pranjit, I'm a web developer and I'm passionate about it.",
	author: "Pranjit Mahanta",
	applicationName: "Pranjit",

};



const TopProgressBar = dynamic(() => import("@/components/TopProgressbar"), {
	ssr: false,
});



export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<TopProgressBar />
				<Navbar />
				{children}
				<Analytics />
			</body>
		</html>
	);
}

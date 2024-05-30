import { Inter } from "next/font/google";
import "./globals.css";
import Header from '@/app/ui/header'
import Footer from '@/app/ui/footer'
import {ThemeProvider} from '@/app/ui/material-ui'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cloth Store",
  description: "This is an example cloth store that I can create",
};

export default function RootLayout({ children }) {
	return (
		<ThemeProvider>
			<html lang="en">
				<body className={inter.className + " " + "bg-gradient-to-br from-cyan-100 via-white to-pink-100"}>
					<Header></Header>
					{children}
					<Footer></Footer>
				</body>
			</html>
		</ThemeProvider>
	);
}

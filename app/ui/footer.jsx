import React from 'react'
import Link from "next/link"
import {SocialIcon} from 'react-social-icons'


export default function Footer() {
	return (
		<footer className="gap-y-1 bg-blue-gray-100 w-full flex flex-col p-3 justify-center align-center items-center">
			<Link href="/privacy-policy" className="mt-2">
				Privacy Policy
			</Link>
			<Link href="/copyright">
				&copy; Copyright
			</Link>
			<Link href="/license">
				Some license
			</Link>
			<hr></hr>
			<div className="flex flex-wrap items-center align-center justify-center gap-x-3">
				<SocialIcon url="https://github.com/artemisia0" style={{width: 30, height: 30}}></SocialIcon>
				<SocialIcon url="https://tiktok.com" style={{width: 30, height: 30}}></SocialIcon>
				<SocialIcon url="https://instagram.com" style={{width: 30, height: 30}}></SocialIcon>
				<SocialIcon url="https://twitter.com" style={{width: 30, height: 30}}></SocialIcon>
				<SocialIcon url="https://youtube.com" style={{width: 30, height: 30}}></SocialIcon>
				<SocialIcon url="https://stackoverflow.com" style={{width: 30, height: 30}}></SocialIcon>
			</div>
		</footer>
	)
}

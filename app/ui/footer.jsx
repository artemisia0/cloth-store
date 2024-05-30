import React from 'react'
import Link from "next/link"
import {SocialIcon} from 'react-social-icons'


export default function Footer() {
	return (
		<footer className="bg-gray-300 flex flex-col items-center p-4">
			<div className="flex flex-row justify-evenly w-64">
				<SocialIcon url="https://github.com/artemisia0" style={{width: 30, height: 30}}></SocialIcon>
				<SocialIcon url="https://tiktok.com" style={{width: 30, height: 30}}></SocialIcon>
				<SocialIcon url="https://instagram.com" style={{width: 30, height: 30}}></SocialIcon>
				<SocialIcon url="https://twitter.com" style={{width: 30, height: 30}}></SocialIcon>
				<SocialIcon url="https://youtube.com" style={{width: 30, height: 30}}></SocialIcon>
				<SocialIcon url="https://stackoverflow.com" style={{width: 30, height: 30}}></SocialIcon>
			</div>
			<Link href="/privacy-policy" className="mt-2">
				Privacy Policy
			</Link>
			<Link href="/copyright">
				&copy; Copyright
			</Link>
			<Link href="/license">
				Some license
			</Link>
		</footer>
	)
}

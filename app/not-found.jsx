import React from 'react'
import Link from 'next/link'


export default function NotFound() {
	return (
		<div className="flex flex-col items-center min-h-screen">
			<p className="font-bold text-2xl">Ooops! Page not found.</p>
			<Link href="/" className="text-lg">Return Home</Link>
		</div>
	)
}

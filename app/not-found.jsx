import React from 'react'
import Link from 'next/link'
import {Button} from '@/app/ui/material-ui'


export default function NotFound() {
	return (
		<div className="flex flex-col items-center min-h-screen">
			<p className="m-5 mt-16 font-bold text-2xl">Ooops! Page not found.</p>
			<Link href="/" className="text-lg m-5">
				<Button variant="outlined">
					Return Home
				</Button>
			</Link>
		</div>
	)
}

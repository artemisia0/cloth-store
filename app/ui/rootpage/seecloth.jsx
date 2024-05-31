import React from 'react'
import Link from 'next/link'
import {Button} from '@/app/ui/material-ui'


export default function SeeCloth() {
	return (
		<div className="m-6 flex flex-col items-center">
			<p className="m-3 text-xl font-bold bg-gradient-to-r from-red-700 via-indigo-700 to-lime-700 bg-clip-text text-transparent drop-shadow">
				Go on and see what we have!
			</p>
			<Link href="/products" className="m-3">
				<Button variant="outlined">See Cloth</Button>
			</Link>
		</div>
	)
}

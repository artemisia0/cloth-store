import React from 'react'
import Link from 'next/link'
import {Button} from '@/app/ui/material-ui'


export default function SeeMap() {
	return (
		<div className="m-6 flex flex-col items-center">
			<p className="m-3 text-xl font-bold bg-gradient-to-r from-cyan-700 to-amber-700 bg-clip-text text-transparent drop-shadow">Where to receive goodies or find our local store</p>
			<Link href="/seemap" className="m-3">
				<Button variant="outlined">See Map</Button>
			</Link>
		</div>
	)
}

'use client'

import React from 'react'
import Link from 'next/link'
import {usePathname} from 'next/navigation'


export default function NavLink(props) {
	const path = usePathname()

	if (!props) {
		throw new Error("props is null in NavLink component")
	}

	props.className = props.className | " "

	if (props.href === path) {
		props.className += " font-light underline"
	}

	props.className += " hover:font-light drop-shadow"

	return (
		<Link {...props}>
		</Link>
	)
}

import React from 'react'
import NavLink from '@/app/ui/navlink'


export default function Header() {
	return (
		<header>
			<nav className="bg-gray-300 drop-shadow-xl flex flex-row justify-evenly items-center p-2">
				<NavLink href="/">
					<span className="text-lg">
						Cloth Store
					</span>
				</NavLink>
				<NavLink href="/products">
					Products
				</NavLink>
				<NavLink href="/about">
					About Us
				</NavLink>
				<NavLink href="/myprofile">
					My Profile
				</NavLink>
				<NavLink href="/logout">
					Logout
				</NavLink>
			</nav>
		</header>
	)
}

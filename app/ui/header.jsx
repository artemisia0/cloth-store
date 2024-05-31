import React from 'react'
import Link from 'next/link'
import ProductsMenu from '@/app/ui/productsmenu'
import {Navbar, Button} from '@/app/ui/material-ui'


export default function Header() {
	return (
		<header>
			<Navbar className="mx-auto max-w-screen-xl p-1 lg:rounded-full lg:pl-6">
				<div className="relative mx-auto flex items-center align-center justify-evenly text-blue-gray-900">
					<Button variant="text" size="sm">
						<Link href="/">
							<span className="text-lg">
								Cloth Store
							</span>
						</Link>
					</Button>
					<ProductsMenu></ProductsMenu>
					<Button variant="text" size="sm">
						<Link href="/about">
							About Us
						</Link>
					</Button>
					<Button variant="text" size="sm">
						<Link href="/myprofile">
							My Profile
						</Link>
					</Button>
					<Button variant="text" size="sm">
						<Link href="/logout">
							Logout
						</Link>
					</Button>
				</div>
			</Navbar>
		</header>
	)
}

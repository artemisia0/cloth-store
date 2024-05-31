import React from 'react'
import {Button, Navbar, Menu, MenuHandler, MenuList, MenuItem} from "@/app/ui/material-ui"
import Link from 'next/link'


export default function ProductsMenu() {
	return (
		<Menu allowHover placement="bottom-end">
			<MenuHandler>
				<Button variant="text">
					<Link href="/products">
						Products
					</Link>
				</Button>
			</MenuHandler>
			<MenuList>
				<MenuItem>
					Hello
				</MenuItem>
				<MenuItem>
					Hi!
				</MenuItem>
			</MenuList>
		</Menu>
	)
}

import React from 'react'
import {List, ListItem, Button, Navbar, Menu, MenuHandler, MenuList, MenuItem} from "@/app/ui/material-ui"
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
			<MenuList className="flex flex-row justify-center align-center items-center p-1">
				<List className="p-1">
					<div className="flex justify-center font-bold text-sm text-blue-gray-900">
						Men
					</div>
					<ListItem className="p-1">
						<MenuItem className="p-1 flex justify-center">
							<Link href="/products/men/shoes">
								Shoes
							</Link>
						</MenuItem>
					</ListItem>
					<ListItem className="p-1">
						<MenuItem className="p-1 flex justify-center">
							<Link href="/products/men/shirts">
								Shirts
							</Link>
						</MenuItem>
					</ListItem>
				</List>
				<List className="p-1">
					<div className="flex justify-center font-bold text-sm text-blue-gray-900">
						Women
					</div>
					<ListItem className="p-1">
						<MenuItem className="p-1 flex justify-center">
							<Link href="/products/women/shoes">
								Shoes
							</Link>
						</MenuItem>
					</ListItem>
					<ListItem className="p-1">
						<MenuItem className="p-1 flex justify-center">
							<Link href="/products/women/shirts">
								Shirts
							</Link>
						</MenuItem>
					</ListItem>
				</List>
				<List className="p-1">
					<div className="flex justify-center font-bold text-sm text-blue-gray-900">
						Unisex
					</div>
					<ListItem className="p-1">
						<MenuItem className="p-1 flex justify-center">
							<Link href="/products/unisex/shoes">
								Shoes
							</Link>
						</MenuItem>
					</ListItem>
					<ListItem className="p-1">
						<MenuItem className="p-1 flex justify-center">
							<Link href="/products/unisex/shirts">
								Shirts
							</Link>
						</MenuItem>
					</ListItem>
				</List>
			</MenuList>
		</Menu>
	)
}

import React from 'react'


export default function NewsPost(props) {
	return (
		<div className="flex flex-col items-center">
			<h2>{props.title}</h2>
			<p>props.description</p>
			<Link href={props.href}>Read More</Link>
		</div>
	)
}

import React from 'react'
import {Button, Input} from '@/app/ui/material-ui'


export default function SearchDashboard() {
	return (
		<div className="m-6">
			<form className="flex flex-col items-center p-3">
				<div className="m-3 w-64">
					<Input name="request" label="Try 'running shoes' for example"></Input>
				</div>
				<div className="m-3">
					<Button variant="outlined" type="submit">Search</Button>
				</div>
			</form>
		</div>
	)
}

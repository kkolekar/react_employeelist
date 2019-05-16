import React from 'react';

const User = (props) => {
	return (
	<div>
		<table>
			<tbody> 
				<tr>
					<th>Id</th>
					<th>Name</th>
					<th>Salary</th>
					<th>Age</th>
				</tr>
				<tr>
					<td>{props.match.params.id}</td>
					<td>{props.match.params.name}</td>
					<td>{props.match.params.salary}</td>
					<td>{props.match.params.age}</td>
				</tr>
			</tbody> 
		</table> 
	</div>
)}

export default User;
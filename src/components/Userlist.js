import React, {Component} from 'react';	
import {BrowserRouter } from 'react-router-dom';

class Userlist extends Component {
	constructor(props){
		super(props);
		this.state={
			items: [],
		}
	}
	
	componentDidMount () {
		fetch ('http://dummy.restapiexample.com/api/v1/employees')
		.then(res => res.json())
		.then(json =>{
			this.setState({
				items: json,
			})
		});
	}


	render() {
	var {items} = this.state;
		return (
			<BrowserRouter>
				<div className="App">
					{items.map(item =>(
						<div key={item.id}>
							<ul>
								<li>
									Id:{item.id} <br/>
									Name:{item.employee_name} <br/>
									salary:{item.employee_salary} <br/>
									Age:{item.employee_age} <br/>
									<a href={`/full-view/id=${item.id}&name=${item.employee_name}&salary=${item.employee_salary}&age=${item.employee_age}`}
									>Full-view</a>
								</li>
							</ul>	
						</div>	
					))};
				</div>
			</BrowserRouter>
		);
	}
}

export default Userlist;
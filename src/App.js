import React, { Component } from 'react';
import CardList from './components/CardList';
import {robots} from './components/robots';
import SearchBox from './components/SearchBox';
import Scroll from './components/scroll'
import './containers/App.css'



class App extends Component {
	constructor(){
		super()
		this.state = {
			robots: [],
			searchfield:''
		}
	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => {this.setState({robots: robots})})
		
	}
	onSearchChange = (event) =>{
			this.setState({searchfield:event.target.value})
	}

	render(){
			const {robots, searchfield} = this.state;
			const filterRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase())
			})
			return !robots.length ?
			 <h1>loading</h1> :		
					(
						<div className = 'tc'>
							<h1>RoboFriends</h1>
							<SearchBox searchChange={this.onSearchChange}/>
							<Scroll>
							<CardList robots={filterRobots}/>
							</Scroll>
							
						</div>
		
		)
			

		
	}
	
}

export default App;
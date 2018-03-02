var React = require('react');
import ContactsList from './ContactsList.js'



class App extends React.Component{
	render(){
		
		return(
			
			<div>
				<h1>Contact List</h1>		
				<ContactsList contacts={this.props.contacts}/>
			</div>		
		);
	}
}

module.exports = App;

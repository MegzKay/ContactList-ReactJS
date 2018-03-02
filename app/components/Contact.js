var React = require('react');

class Contact extends React.Component{
	delete()
	{
		this.props.deleteContact(this.props.contact.id);
	}
	
	render(){
		return(
			<li key={this.props.contact.id}>{this.props.contact.name} {this.props.contact.phone} {this.props.contact.id} <span onClick={this.delete.bind(this)} style={{color:"red"}}>X</span></li>
		);
	}
}

module.exports = Contact;
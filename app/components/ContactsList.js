var React = require('react');
import Contact from './Contact.js'

class ContactsList extends React.Component{
	constructor(props)
	{
		super(props);
		this.state = {
			contacts: props.contacts
		}
		this.deleteContact = this.deleteContact.bind(this);
	}
	
	componentDidMount() 
	{
		let filteredContacts = this.filterAndSearch(this.state.contacts, "");
	
		this.setState(
			{
				contacts: filteredContacts
			}
		);
	}
	
	updateSearch(event)
	{
		let filteredContacts = this.filterAndSearch(this.state.contacts, event.target.value);

		this.setState(
			{
				contacts: filteredContacts
			}
		);
	}
	addContact(event)
	{
		event.preventDefault();
		let name = this.refs.name.value;
		let phone = this.refs.phone.value;
		var id = 1;
		
		if(this.state.contacts.length != 0 ) 
		{
			id = this.state.contacts[this.state.contacts.length-1].id+1;
		}
		

		
		this.setState({
			contacts: this.state.contacts.concat({id,name,phone})
		});
		this.refs.name.value = "";
		this.refs.phone.value = "";
	}
	deleteContact(id)
	{
		var newList = this.state.contacts.slice();
		for(var i = 0; i< newList.length;i++)
		{
			
			if(newList[i].id == id){
				newList.splice(i, 1);
			}
		}
		
		this.setState({contacts: newList});
	}
	
	
	filterAndSearch(contacts, search)
	{

		var filtered = contacts.filter(function(contact){
			return contact.name.toLowerCase().indexOf(search.toLowerCase()) != -1;
		});
		
		filtered.sort(function(contactA, contactB) {

			var wordA = contactA.name.toUpperCase(); 
			var wordB = contactB.name.toUpperCase(); 


			if (wordA < wordB) {
				return -1;
			}
			if (wordA > wordB) {
				return 1;
			}

			return 0;
		});

		return filtered;

	}
	
	render(){


		return(
			<div>
				<input 
				type="text" 
				placeholder="Search"
				value={this.state.search} 
				onChange={this.updateSearch.bind(this)}
			/>
				<form onSubmit={this.addContact.bind(this)}>
					<input type="text" ref="name"/>
					<input type="text" ref="phone"/>
					<button type="submit">Submit</button> 
				</form>
				<ul>
					{this.state.contacts.map((contact)=> {
						return <Contact contact={contact} key={contact.id} deleteContact={this.deleteContact}/>
					})
					}
			 </ul>		
			
			
			</div>
		);
	}
}

module.exports = ContactsList;
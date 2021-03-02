
import React from 'react';
import './App.css';
import contacts from './contacts.json';

class App extends React.Component{
  constructor(){
    super()
  
    this.state = {
      contactsArr: contacts.slice(0,5)
    }
  }

  // iteration 2
  addContact = () => {
    const uniqueContacts = contacts.filter(eachContact => {
      return !this.state.contactsArr.includes(eachContact)
    })
    
    if(uniqueContacts.length > 0) {
      const randomContact = uniqueContacts[Math.floor(Math.random()*uniqueContacts.length)]
      this.setState({
        contactsArr : [...this.state.contactsArr, randomContact]
      })
    }
  }
// Iteration 2
  // handleButtonClick= ()=>{
  //   this.setState(
  //     {contactsArr: this.state.uniqueContacts}
  //   )
  // }

  render(){
    return(
      <div>
        <h1>IronContacts </h1>
        <button onClick={this.addContact}>Add a random contact</button>
        <table>
          <thead>
            <tr>
               <th>Picture</th>
               <th>Name</th>
               <th>Popularity</th>
             </tr>
          </thead>
          <tbody>
             {this.state.contactsArr.map(contact => {
               return (
                  <tr key={ contact.id}>   
                    <td><img src={contact.pictureUrl} style={ { width: '50px'}} alt=""/></td>
                    <td>{contact.name}</td>
                    <td>{contact.popularity}</td>
                  </tr>
                )
               })
             }
             
          </tbody>
        </table>

      </div>
    )
  }
}
export default App;

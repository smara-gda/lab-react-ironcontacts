
import React from 'react';
import './App.css';
import contacts from './contacts.json';

class App extends React.Component{
  constructor(){
    super()
  
    this.state = {
      contacts: contacts.slice(0,5)
    }
  }


  render(){
    return(
      <div>
        <h1>IronContacts </h1>
        <table>
          <thead>
            <tr>
               <th>Picture</th>
               <th>Name</th>
               <th>Popularity</th>
             </tr>
          </thead>
          <tbody>
             {this.state.contacts.map(contact => {
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

import {useState} from 'react';
import './App.css';
import AddRandomBtn from './Components/AddRandomButton';
import DisplayContact from './Components/DisplayContact';
import SortContacts from './Components/SortContacts';
import allContacts from './contacts.json'

const firstFive = allContacts.slice(0, 5)

function App() {
  const [contacts, setContact] = useState (firstFive)
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <AddRandomBtn contactArr={contacts} setter={setContact} />
      <SortContacts contactArr={contacts} setter={setContact} sortBy="popularity">Sort by popularity</SortContacts>
      <SortContacts contactArr={contacts} setter={setContact} sortBy="name">Sort by name</SortContacts>
      <div className="contact">
            <h3>Picture</h3>
            <h3>Name</h3>
            <h3>Popularity</h3>
            <h3>Won Oscar</h3>
            <h3>Won Emmy</h3>
            <h3>Actions</h3>
      </div>
      <div className="contactTable">
        {contacts
        .map(contact => 
          <div key={contact.id}>
            <DisplayContact 
            picture={contact.pictureUrl} 
            name={contact.name} 
            popularity={contact.popularity.toFixed(2)} 
            oscar={contact.wonOscar} 
            emmy={contact.wonEmmy} id={contact.id} contactArr={contacts} setter={setContact} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

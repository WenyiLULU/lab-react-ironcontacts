import {useState} from 'react';
import './App.css';
import DisplayContact from './Components/DisplayContact';
import allContacts from './contacts.json'

const firstFive = allContacts.slice(0, 6)

function App() {
  const [contacts, setContact] = useState (firstFive)
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <div className="contact">
            <h3>Picture</h3>
            <h3>Name</h3>
            <h3>Popularity</h3>
            <h3>Won Oscar</h3>
            <h3>Won Emmy</h3>
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
            emmy={contact.wonEmmy} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

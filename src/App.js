import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';

function App() {

  const LOCAL_STORAGE_KEY = "contacts";

  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []);
  
  const addContactHandler = (contactValue) => {
    console.log(contactValue);
    //spread operator passa todos os dados mais os dados novos
   
    setContacts([...contacts,{id: contactValue.name, ...contactValue}]);
  
  }

  const removedContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
       return contact.id !== id;   
    });

    setContacts(newContactList);
  }

  useEffect(() => {
    const initContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(initContacts) {
      setContacts(initContacts);
    }
  },[]);

  useEffect(() => {
    console.log("Passei aqui ao atualizar");
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
  },[contacts]);

  /*
  const contacts = [
    {
      id: "1",
      name: "john",
      email: "john@gmail.com"
    },
    {
      id: "2",
      name: "roberto",
      email: "roberto@gmail.com"
    }
  ]; */

  return (
    <div className="ui container">
     <Header />
     <AddContact addContactHandler={addContactHandler} />
     <ContactList contacts={contacts} getContactId={removedContactHandler} />
    </div>
  );
}

export default App;

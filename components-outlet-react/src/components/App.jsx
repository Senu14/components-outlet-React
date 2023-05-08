import React,{ useState} from 'react'; //Adding React Hook
import './App.css';
import Header from './Header';
import ContactList from'./ContactList';
// import Footer from './Footer';
import AddForm from './AddForm';


function App() {

  const [contacts, setContacts] = useState([]);
 
  return (
    <div>
      <Header />
      <AddForm />
      <ContactList  contacts={contacts} />
      {/* <Footer /> */}
    </div>
   
   
  );
}

export default App;

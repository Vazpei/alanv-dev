import NewContact from "./components/NewContact"
import Contacts from './components/Contacts'
import useContact from './hooks/useContacts.ts'

function App() {

  const { saveOrUpdateContact,contact,setContact,contactList,setContactList,deleteContact,orderList } = useContact()
  
  return (
    <>
    <div className="flex flex-wrap gap-3 p-10 m-auto mt-10 justify-center">
      <NewContact
        saveOrUpdate={saveOrUpdateContact}
        contact={contact}
        setContact={setContact}
      />
      <Contacts
        contact={contact}
        setContact={setContact}
        contactList={contactList}
        deleteContact={deleteContact}
        setContactList={setContactList}
        orderList={orderList}
      />
    </div>
    </>
  )
}

export default App

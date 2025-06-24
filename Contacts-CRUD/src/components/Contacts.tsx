
import type { Contact } from "../types"



type ContactsProps = {
  contact:Contact
  setContact: React.Dispatch<React.SetStateAction<Contact>>
  contactList: Contact[]
  setContactList: React.Dispatch<React.SetStateAction<Contact[]>>
  deleteContact: (email:string) => void
  orderList:(order:string) => void
}

export default function Contacts({setContact,contactList,deleteContact,orderList}:ContactsProps) {
  
  const putInfoToModify = (nameM:string,emailM:string,numberM:number,ageM:number) => {
    console.log(`User: ${nameM} ${emailM} ${numberM} ${ageM}`);
    setContact({
      name:nameM,
      email:emailM,
      number:numberM,
      age:ageM
    })
  }
  const handleOrderList = (orderType:string) =>{
    if(contactList.length !== 0){
      orderList(orderType)
    }else{
      console.log("There's not any item in contact list");
    }
    
  }

  return (
    <>
      <div className="w-120 bg-zinc-700 shadow-2xl rounded-2xl">
        <div className="p-5 flex justify-between items-center">
          <h2 className="font-bold text-cyan-500 text-2xl pl-1">
            All Contacts
          </h2>
          <button 
            className="bg-cyan-500 p-1 rounded font-bold text-white hover:bg-cyan-200"
            onClick={() => handleOrderList('asc')}>A - Z</button>
        </div>
        <div>
          { contactList.length === 0 ? (
            <div className="flex font-semibold text-xl text-white p-5">
              <h2> Nothing to show...</h2>
            </div>
          ):(
            contactList.map(contact => {
              const { name, email,number,age } = contact
              return(
                <div className="p-5">
                  <div className="border-t border-white border-dashed">
                    <div className="flex justify-between ">
                    <p className="text-cyan-500 font-bold">Name: <span className="text-white font-light">{name}</span></p>
                    <p className="text-cyan-500 font-bold">Age: <span className="text-white font-light">{age}</span></p> 
                    </div>
                    <p className="text-cyan-500 font-bold">email: <span className="text-white font-light">{email}</span></p>
                    <div className="flex justify-between">
                      <p className="text-cyan-500 font-bold">number: <span className="text-white font-light"> {number}</span></p> 
                      <div className="flex gap-2">
                        <button className="text-white font-extrabold bg-sky-600 w-6 h-6 flex justify-center rounded-full transition-all hover:scale-110" title="Remove contact" onClick={() => putInfoToModify(name,email,number,age)}><img src="img/edit.svg" alt="" width={20} height={20} /></button>
                        <button className="text-white font-extrabold bg-rose-600 w-6 h-6 flex justify-center rounded-full transition-all hover:scale-110" title="Remove contact" onClick={() => deleteContact(email)}><img src="img/trash.svg" alt="" width={20} height={20}/></button>
                      </div>
                      
                    </div>
                    
                  </div>
                </div>
              )
            })
          )
          }
        </div>
      </div>
    </>
  )
}

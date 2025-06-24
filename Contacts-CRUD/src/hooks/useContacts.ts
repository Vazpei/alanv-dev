import { useState } from "react"
import type { Contact } from "../types"


export default function useContacts() {
    
    const [contact,setContact] = useState<Contact>({ //estado de contact
        name:'',
        email:'',
        number:0,
        age:0
    });
    const [contactList,setContactList] = useState<Contact[]>([]) //estado de contact list

    const saveOrUpdateContact = () => { //Checar si guardamos el contact como nuevo o si ya existe en el arreglo mediante el email
        setContactList(prev => {
            const exists = prev.some(c => c.email === contact.email)
            if(exists) {
                return prev.map(c => c.email === contact.email ? contact : c)
            }else{
                return [...prev,contact]
            }
        })
    }

    const deleteContact = (email:string) =>{ //Eliminar contacto si el email coincide
        setContactList((prevList) => prevList.filter(contact => contact.email !== email))
        console.log(`Contacto ${email} eliminado`);
    }

    const orderList = (order:string) => {
        switch(order){
            case 'asc':
                const orderedList = [...contactList].sort((a,b) => a.name.localeCompare(b.name))
                setContactList(orderedList)
                break;
        }
    }
    
    return{
        saveOrUpdateContact,
        contact,
        setContact,
        contactList,
        setContactList,
        deleteContact,
        orderList
    }
}

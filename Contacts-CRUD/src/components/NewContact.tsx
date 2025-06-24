
import { useState } from 'react';
import type { Contact } from '../types';
import './../App.css'

type NewContactProps = {
  saveOrUpdate: () => void
  contact:Contact,
  setContact:React.Dispatch<React.SetStateAction<Contact>>
}

export default function NewContact({saveOrUpdate,contact,setContact}:NewContactProps) {

  const [alertM,setAlertM] = useState("")//state para alerta

  const showAlert = (message:string, duration = 5000) =>{ //Variable para mensaje y duracion
    setAlertM(message);
    setTimeout(() => setAlertM(""),duration)//Vaciamos el mensaje despues de un rato
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    
    if (name === "age" && Number(value) === 0) {
      return console.log("No puede haber edad 0");
    }
    setContact((prev) => ({...prev,[name]: name === 'number' || name === 'age' ? Number(value) : value
      }));
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {//Boton para enviar el formulario
    e.preventDefault();
    console.log('Datos guardados en el state:', contact);

    if(contact.name === ''){//Checar que los campos no esten vacios
      return showAlert("Name cannot be empty!")
    }
    if(contact.email === ''){
      return showAlert("email cannot be empty!")
    }
    if(contact.number === 0){
     return showAlert("number cannot be empty!");
    }
    if(contact.age === 0){
     return showAlert("Age cannot be 0!");
    }
    // Aquí podrías agregarlo a una lista, enviarlo a una API, etc.
    saveOrUpdate()
    setContact({
      name:'',
      email:'',
      number:0,
      age:0
    })
  }

  const { name,email,number,age } = contact

  return (
    <>
    <div className='w-120 rounded-2xl bg-zinc-700 p-5 shadow-2xl max-h-120'>
        {alertM && ( //Renderizar si alert contiene algo
        <div className="mb-4 bg-yellow-100 text-yellow-700 border-l-4 border-yellow-500 p-2 rounded shadow-sm">
          {alertM}
        </div>
      )}
        <div className=' p-5'>
            <h2 className='font-bold text-cyan-500 text-2xl'>
                Add new Contact
            </h2>
        </div>
            <form action="handleSubmit" onSubmit={handleSubmit} className='flex flex-col gap-2'>
                <input type="text" name="name" id="" placeholder='name' value={name} className='bg-zinc-600 font-semibold text-white p-2 rounded' onChange={handleChange} />
                <input type="text" name="email" id="" placeholder='email' value={email} className='bg-zinc-600 font-semibold text-white p-2 rounded' onChange={handleChange} />
                <input type="text" name="number" id="" placeholder='number' value={number === 0 ? '' : number}  className='bg-zinc-600 font-semibold text-white p-2 rounded' onChange={handleChange}/>
                <label className="text-white font-semibold">Age: <span className='font-bold text-cyan-600'>{age}</span> </label>
                <input
                  type="range"
                  name="age"
                  min="0"
                  max="100"
                  value={age}
                  onChange={handleChange}
                  className="w-full accent-cyan-500"
                />
                <button type='submit' className='flex justify-center font-bold text-white bg-cyan-500 p-2 rounded w-full hover:bg-cyan-300'>Save <img src="img/add.svg" alt="" /></button>
            </form>
    </div>
    </>
  )
}

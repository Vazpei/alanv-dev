import { useState } from 'react';
import type { User } from '../types/User';
import axios from 'axios';

type CreateProps = {  // Define any props if needed
    User: User,
    setUser:React.Dispatch<React.SetStateAction<User>>
};  


export default function Create({ User, setUser }:CreateProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [notification, setNotification] = useState<{ status: boolean, message: string } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
  }
  
  const handleClick = async () => {
    if(!spaceValidation()) return;
    setIsSubmitting(true);
    console.log('Current User:', User);
    try {
      const response = await axios.post('http://localhost:9898/create-user/', User);
      console.log('User created successfully:', response.data);
      handleNotification(true, 'User created successfully!');
      setUser({
        name:'',
        email:''
      })
    } catch (error) {
      console.error('Error creating user:', error);
      handleNotification(false, 'Failed to create user. Please try again, or check the console for more details.');
    }finally{
      setIsSubmitting(false);
    }
  }

  const handleNotification = (status: boolean, message:string) => {
    setNotification({ status, message });
    setTimeout(() => {
      setNotification(null);
    }, 3000); // Clear notification after 3 seconds
  }

  const spaceValidation = () =>{
    if(User.name === '' || User.email === ''){
      handleNotification(false, 'Name and email cannot be empty or just spaces.');
      return false;
    }
    return true;
  }


  return (
    <div className="w-full md:w-120 p-2 m-auto">
      <div className="text-3xl font-bold text-violet-500 text-center"> Create new user</div>
      <div className="flex gap-3 flex-col w-80 justify-center items-center mr-auto ml-auto mt-5">
        <input 
        type="text"
        name="name" 
        className="border-1 border-slate-600 p-2 rounded w-full" 
        onChange={handleInputChange}
        value={User.name}
        placeholder="name" />
        <input 
        type="email"
        name="email"
        className="border-1 border-slate-600 p-2 rounded w-full"
        onChange={handleInputChange}
        value={User.email}
        placeholder="email"
        />
        <button
        className="bg-violet-600 font-bold text-white p-2 rounded w-full hover:bg-violet-700 transition-all duration-200"
        onClick={handleClick}
        >
        {isSubmitting ? 'Registering...' : 'Register'}
        </button>
        {isSubmitting && (
          <div className='text-violet-600 mt-2'>Submitting, please wait...</div>
        )}

        {notification && (
          <div
            className={`w-full rounded p-2 mt-2 border-2 ${
              notification.status
                ? 'bg-green-100 border-green-600 text-green-600'
                : 'bg-red-100 border-red-600 text-red-600'
            }`}
            >
            {notification.message}
          </div>
        )}
      </div>
    </div>
  )
}

import { useState } from "react";
import type { User } from "../types/User";
import axios from "axios";


type UpdateProps = {
  User:User
  SetUser: React.Dispatch<React.SetStateAction<User>>
}

export default function Update({ User, SetUser}: UpdateProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [notification, setNotification] = useState<{ status: boolean, message: string } | null>(null);


  //Handle the change of input fields
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    SetUser(prev => ({
      ...prev,
      [name] : value
    }));
  }

  //Validate the input fields
  const spaceValidation = () => {
    if(User.name === '' || User.email === ''){
      handleNotification(false, 'The name and the email cannot be empty or just have spaces');
      return false
    }
  return true
  }

  //hanlde the notification of the update
  const handleNotification = (status:boolean, message:string) =>{
    setNotification({ status, message });
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  }

  //Handle update click
  const handleClick = async () => {
    if(!spaceValidation()) return
    setIsSubmitting(true);
    console.log(`Current user to update: ${User.name}`);

    try {
      const response = await axios.put(`http://localhost:9898/updateUser/${User.email}`, User);
      console.log('User updated successfully:', response.data);
      handleNotification(true, 'User updated successfully!');
      SetUser({
        name: '',
        email: ''
      });
    } catch (err) {
      console.error('Error updating user:', err);
      handleNotification(false, 'Failed to update user. Please try again, or check the console for more details.');
    }finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="main">
      <div className="text-3xl font-bold text-violet-500 text-center">Update name by email</div>
      <div className="flex gap-5 pt-5 flex-col w-80 justify-center items-center m-auto ">
        <input 
          type="text"
          placeholder="example@.com"  
          name="email"
          value={User.email}
          className="border-1 border-slate-600 p-2 rounded w-full"
          onChange={handleInputChange}
          />
        <input 
          type="text" 
          placeholder="Name"
          name="name" 
          value={User.name}
          className="border-1 border-slate-600 p-2 rounded w-full"
          onChange={handleInputChange}
          />
        <button
        onClick={handleClick}
        className="bg-violet-600 p-2 rounded w-full hover:bg-violet-700 transition-all duration-200">{isSubmitting ? 'Submitting' : 'Update'}</button>


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

import type { User } from '../types/User';
import axios from 'axios';

type CreateProps = {  // Define any props if needed
    User: User,
    setUser:React.Dispatch<React.SetStateAction<User>>
};  


export default function Create({ User, setUser }:CreateProps) {

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
  }
  const handleClick = async () => {
    console.log('Current User:', User);
    try {
      const response = await axios.post('http://localhost:9898/create-user/', User);
      console.log('User created successfully:', response.data);
    } catch (error) {
      console.error('Error creating user:', error);
    }
  }


  return (
    <div className="w-full md:w-150 p-2">
      <div className="text-3xl font-bold text-sky-600 text-center"> Create new user</div>
      <div className="flex gap-2 flex-col w-80 justify-center items-center mr-auto ml-auto mt-5">
        <input 
        type="text"
        name="name" 
        className="bg-gray-300 p-2 rounded w-full" 
        onChange={handleInputChange}
        placeholder="name" />
        <input 
        type="email"
        name="email"
        className="bg-gray-300 p-2 rounded w-full"
        onChange={handleInputChange}
        placeholder="email"
        />
        <button
        className="bg-sky-600 font-bold text-white p-2 rounded w-full hover:bg-sky-700 transition-all duration-200"
        onClick={handleClick}
        >Register</button>
      </div>
    </div>
  )
}

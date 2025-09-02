import { useEffect, useState } from "react";
import axios from "axios";
import type { User } from "../types/User";

type SearchProps = {
  getAllUsers: () => void;
  setIsSearching: React.Dispatch<React.SetStateAction<boolean>>;
  setUsers: React.Dispatch<React.SetStateAction<User[]>>
  users: User[];
  isSearching: boolean;
}

export default function Search({ getAllUsers,setIsSearching,setUsers,users,isSearching }: SearchProps) {
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    getAllUsers()
    },[])

  useEffect(() => {
    console.log('Search term changed:', searchTerm);
    if(searchTerm.trim() === '') {
      getAllUsers(); // If search term is empty, fetch all users
      return;
    }
  },[searchTerm])

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setSearchTerm(e.target.value);
  }
  
  const handleClick = () => {
    console.log('You searched for:', searchTerm);
    setIsSearching(true);
    axios.get('http://localhost:9898/getUserByEmail/' + searchTerm.trim())
      .then(res => {
        const data = res.data;
        if (!data || (typeof data === 'object' && Object.keys(data).length === 0)) {
          setUsers([]); // Usuario no encontrado
        } else {
          const userData = Array.isArray(data) ? data : [data];
          setUsers(userData);
        }
        setIsSearching(false);
        console.log('Search results:', data);
      })
      .catch(err => {
        console.log('Error trying to search for user', err);
        setUsers([]);
        setIsSearching(false);
      });
};

  return (
    <div className="w-full max-w-250 p-2 m-auto">
      <div className="text-3xl font-bold text-violet-500 text-center">Search user by email</div>
      <div className="flex justify-center pt-5">
        <input 
        onChange={handleSearchChange}
        className="border-1 border-slate-600 p-2 rounded-tl rounded-bl w-80"
        type="text" />
        <button
        onClick={handleClick}
        className="bg-violet-500 p-2 rounded-tr rounded-br active:bg-violet-700"
        ><img src="/search.svg" alt="" /></button>
      </div>
      <div className="flex justify-around mt-5">
        {isSearching
         ? (<h2>Loading users...</h2>)
         : (<div></div>)
        }
        </div>
        <div className="mt-5 pl-5 flex flex-col gap-2 justify-center md:items-center">
            {users.length !== 0 
        ? ( users.map((user:User) =>{
          return(
            <div className="flex gap-2">
              <h2 className="font-bold">{user.name} -</h2>
              <div>{user.email}</div>
            </div>
          )
        }))
        : (<h2 className="text-red-500">No users found</h2>)
        }
        </div>
    </div>
  )
}

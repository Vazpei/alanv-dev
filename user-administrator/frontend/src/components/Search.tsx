import { useEffect, useState } from "react";


export default function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [submitting, setSubmitting] = useState(false);
  
  useEffect(() => {
    console.log('Search term changed:', searchTerm);
  },[searchTerm])

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setSearchTerm(e.target.value);
  }
  const handleClick = () => {
    console.log('You searched for:', searchTerm);
  }

  return (
    <div className="w-full md:w-120 p-2 m-auto">
      <div className="text-3xl font-bold text-violet-500 text-center">Search</div>
      <div className="flex justify-center mt-5">
        <input 
        onChange={handleSearchChange}
        className="border-1 border-slate-600 p-2 rounded-tl rounded-bl w-80"
        type="text" />
        <button
        onClick={handleClick}
        className="bg-violet-500 p-2 rounded-tr rounded-br active:bg-violet-700"
        ><img src="/search.svg" alt="" /></button>
      </div>
    </div>
  )
}

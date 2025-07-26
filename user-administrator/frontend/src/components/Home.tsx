import axios from "axios"
import { useEffect, useState } from "react";
import type { User } from "../types/User";


export default function Home() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get("http://localhost:9898/all-users")
      .then(res => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching users:", err);
        setError("Failed to load users.");
        setLoading(false);
      });
  }, []);

  
  return (
    <div className="w-full md:w-120 pl-5 pr-5">
      <div className="text-3xl font-bold text-violet-500">Welcome back!</div>
      <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae autem placeat eius quidem aliquid, officia quae culpa consequatur ex possimus sint architecto facere rem, nam sunt quos molestias eveniet? Aliquid?</div>
      <div className="flex justify-between mt-10">
        <h2 className="text-2xl font-bold text-violet-500">All registered users</h2>
        <button 
        className="bg-violet-600 p-2 rounded font-bold active:bg-violet-300">A - Z</button>
      </div>
      <div className="mt-5 flex flex-col ">
        {loading && <div>Loading users...</div>}
        {error && <div className="text-red-500">{error}</div>}
        {!loading && !error && (
          <ul>
            {users.map((user: User) => (
              <li className="mb-2 flex gap-2">
                <h2 className="font-bold">{user.name} -</h2><div> {user.email}</div>
              </li>
            ))}
          </ul>
        )}
      </div>

    </div>
  )
}

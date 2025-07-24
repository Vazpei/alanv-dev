import axios from "axios"
import { useEffect, useState } from "react";


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
        setLoading(false);
      });
  }, []);

  return (
    <div className="w-full md:w-150 p-5">
      <div className="text-3xl font-bold text-sky-600">Welcome back!</div>
      <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae autem placeat eius quidem aliquid, officia quae culpa consequatur ex possimus sint architecto facere rem, nam sunt quos molestias eveniet? Aliquid?</div>
      <div>
        <h2 className="mt-10 text-2xl font-bold text-sky-600">All registered users</h2>
      </div>
      <div className="mt-5 flex flex-col ">
        {loading && <div>Loading users...</div>}
        {error && <div className="text-red-500">{error}</div>}
        {!loading && !error && (
          <ul>
            {users.map((user: any) => (
              <li key={user._id} className="mb-2">
                <span className="font-bold">{user.name}</span> - {user.email}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

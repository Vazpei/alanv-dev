import { useEffect, useState } from "react";
import type { User } from ".././types/User";
import axios from "axios";

export default function Crud() {
    const [users, setUsers] = useState<User[]>([])
    const [isSearching, setIsSearching] = useState(true);
    const [user,setUser] = useState<User>({
        name: "",
        email: ""   
    })
    useEffect(() => {
        console.log(`User state changed: ${JSON.stringify(user)}`);
    },[user])

    const test = () => {
        console.log('Testing CRUD hook...');
    }

     const getAllUsers = () => {
        axios.get('http://localhost:9898/all-users')
        .then(res =>{
            setUsers(res.data)
            console.log('All users:', res.data);
            setIsSearching(false)
        }).catch(err =>{
            console.log('Error trying to get all users',err)
            setIsSearching(false)
        })
    }

    return {
        test,
        user,
        setUser,
        getAllUsers,
        users,
        setUsers,
        isSearching,
        setIsSearching
    }
}

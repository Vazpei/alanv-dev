import { useEffect, useState } from "react";
import type { User } from ".././types/User";

export default function Crud() {
    
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
    return {
        test,
        user,
        setUser
    }
}

import { useState } from "react"



export function useOperations() {
    const suma = (a:number,b:number) => a + b 

    const [ operation,setOperation ] = useState<number>(0)

    return{
        suma,
        operation,
        setOperation
    }
}

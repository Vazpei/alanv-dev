import { useState,useEffect, act } from "react"



export function useOperations() {
    const [ screenResult, setScreenResult ] = useState<string>('0')
    const [ screenOperation,setScreenOperation ] = useState<string>('0')
    const [ activeOperator, setActiveOperator ] = useState<string>('')
    const [ valueN, setValueN ] = useState<number>(0)
    const finishedNumber: boolean = false
    let temporalNumber:number = 0

    const makingCalc = (value:number) =>{
        console.log("Making Operation");
        if(finishedNumber){
            switch(activeOperator){
                case'+':
                console.log("Suma");
                break;
            }
        }
    }
    
    const writingScreenR = (n:number) =>{
        setScreenResult((prev) => prev === '0' ? n.toString() : prev + n.toString() )
    }

    return {
        screenResult,
        setScreenResult,
        writingScreenR,
        activeOperator,
        setActiveOperator,
        makingCalc,
        finishedNumber
        
    }
}

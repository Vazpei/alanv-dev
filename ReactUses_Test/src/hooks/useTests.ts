import { useEffect, useState } from "react"



export default function useTests() {

    const [ input,setInput ] = useState<string>('0')
    const [ result,setResult ] = useState<string>('0')
    
    
    useEffect(() => {
      try{
        console.log("Nuevo resultado",input);
        calculate()
      } catch(error){
        console.log("Symbol at result");
      }finally{
        console.log("input useEffect wasa ejected");
      }
    },[input])

    useEffect(() => {
        console.log("Nuevo result",result);
    },[result])

    const backspace = () =>{
      setInput(prev => (prev.length > 1 ? prev.slice(0, -1) : "0"));
    }
    const clear = () =>{
      setInput('0')
      setResult('0')
    }
    const calculate = () =>{
      console.log("Calculate...");
      setResult(eval(input))
    }


  return{
    input,
    setInput,
    result,
    setResult,
    backspace,
    clear,
    calculate
  }
}

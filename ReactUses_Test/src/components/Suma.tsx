import { useState } from "react"

type SumaProps = {
    suma:( n1:number,n2:number ) => void
    result:number
}


export default function Suma({suma,result}:SumaProps) {

    const [ n1,setN1 ] = useState("")
    const [ n2,setN2 ] = useState("")

    const handleClick = () => {
    const value1 = Number(n1)//Verificar que son numeros
    const value2 = Number(n2)

    if(!isNaN(value1) && !isNaN(value2)){ //Verificar con un if que no sean null
      suma(value1,value2)
    }else{
      console.log("Error in values");
    }
  }
  
  return (
    <>
        <h2 className="text-center font-bold text-blue-500">Suma</h2>
        <div className="flex flex-col gap-1 p-5">
          <div className="flex items-center">
            <label htmlFor="n1" className="text-right basis-20 mr-4">n1</label>
            <input type="text" name="" id="n1" value={n1} onChange={e => setN1(e.target.value)} className="bg-gray-300 w-60 rounded p-2"/>
          </div>
          <div className="flex items-center">
            <label htmlFor="n2" className="text-right basis-20 mr-4">n2</label>
            <input type="text" name="" id="n2" value={n2} onChange={e => setN2(e.target.value)} className="bg-gray-300 w-60 rounded p-2"/>
          </div>
          <div className="flex items-center">
            <div className="basis-20 mr-4"></div>
            <button className="bg-blue-500 rounded p-1 w-60 font-bold text-white active:bg-blue-300 transition-all" onClick={handleClick}>Test</button>
          </div>
          <div className="text-center">
            <label htmlFor="" className="text-center">Result: {result}</label>
          </div>
        </div>
    </>
  )
}

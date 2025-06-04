
import './../styles/Calculator.css'

 type CalculatorProps = {
    screenResult: string,
    setScreenResult: React.Dispatch<React.SetStateAction<string>>
    activeOperator: string
    setActiveOperator: React.Dispatch<React.SetStateAction<string>>
    writeScreenR:(n:number) => void
    makingCalc:(n:number) => void
    finishedNumber:boolean
 }

export default function Calculator({screenResult,setScreenResult,writeScreenR,makingCalc,activeOperator,setActiveOperator,finishedNumber}:CalculatorProps) {

  const TypeNumber = (n:number) => {
    writeScreenR(n)
  }
  const TypeC = () => {

  }
  const TypeOperator = (operator:string) =>{
    setActiveOperator(operator)
    finishedNumber = true
    makingCalc(parseFloat(screenResult))
  }
 
  return (
    <div className="main">
          <div className="calculator-container bg-white rounded-2xl w-90 m-auto p-2">
            <div className="screen flex flex-col gap-2 pr-6">
              <label htmlFor="" className="font-bold text-right"></label>
              <label htmlFor="" className="Rscreen font-bold text-right text-3xl">{screenResult}</label>
            </div>
            <div className="buttons grid grid-cols-4 mt-4 gap-1 p-1">
              <button className="c-btn" >C</button>
              <button className="normal-btn">(</button>
              <button className="normal-btn">)</button>
              <button className="symbol-btn">/</button>

              <button className="normal-btn" onClick={() => TypeNumber(1)}>1</button>
              <button className="normal-btn">2</button>
              <button className="normal-btn">3</button>

              <button className="symbol-btn" onClick={() => TypeOperator('+')}>+</button>

              <button className="normal-btn">4</button>
              <button className="normal-btn">5</button>
              <button className="normal-btn">6</button>

              <button className="symbol-btn">-</button>

              <button className="normal-btn">7</button>
              <button className="normal-btn">8</button>
              <button className="normal-btn">9</button>

              <button className="symbol-btn">x</button>
              
              <button className="normal-btn">.</button>
              <button className="normal-btn">0</button>
              <button className="bg-green-400 active:bg-green-600 text-white font-black rounded p-4 col-span-2">=</button>
            </div>
          </div>
      </div>
  )
}

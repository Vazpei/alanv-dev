
type CalculatorProps = {
    operation: number,
    setOperation: [number, React.Dispatch<React.SetStateAction<number>>]
}

export default function Calculator
({operation,setOperation}:CalculatorProps) {

    const suma = (n:number) => setOperation(operation + n)

  return (
    <div className="main">
          <div className="calculator-container bg-white rounded-2xl w-90 m-auto p-2">
            <div className="screen flex flex-col gap-2 pr-6">
              <label htmlFor="" className="font-bold text-right">Operacion</label>
              <label htmlFor="" className="font-bold text-right">Resultado</label>
            </div>
            <div className="buttons grid grid-cols-4 mt-4 gap-1 p-1">
              <button className="bg-yellow-100 text-yellow-700 font-bold rounded p-4 active:bg-red-400 active:text-white">C</button>
              <button className="bg-gray-200 active:bg-gray-300 font-bold rounded p-4">(</button>
              <button className="bg-gray-200 active:bg-gray-300 font-bold rounded p-4">)</button>
              <button className="bg-orange-400 active:bg-orange-600 text-white font-bold rounded p-4">/</button>
              <button className="bg-gray-200 active:bg-gray-300 font-bold rounded p-4">1</button>
              <button className="bg-gray-200 active:bg-gray-300 font-bold rounded p-4">2</button>
              <button className="bg-gray-200 active:bg-gray-300 font-bold rounded p-4">3</button>
              <button className="bg-orange-400 active:bg-orange-600 text-white font-bold rounded p-4">+</button>
              <button className="bg-gray-200 active:bg-gray-300 font-bold rounded p-4">4</button>
              <button className="bg-gray-200 active:bg-gray-300 font-bold rounded p-4">5</button>
              <button className="bg-gray-200 active:bg-gray-300 font-bold rounded p-4">6</button>
              <button className="bg-orange-400 active:bg-orange-600 text-white font-bold rounded p-4">-</button>
              <button className="bg-gray-200 active:bg-gray-300 font-bold rounded p-4">7</button>
              <button className="bg-gray-200 active:bg-gray-300 font-bold rounded p-4">8</button>
              <button className="bg-gray-200 active:bg-gray-300 font-bold rounded p-4">9</button>
              <button className="bg-orange-400 active:bg-orange-600 text-white font-bold rounded p-4">x</button>
              <button className="bg-gray-200 active:bg-gray-300 font-bold rounded p-4">.</button>
              <button className="bg-gray-200 active:bg-gray-300 font-bold rounded p-4">0</button>
              <button className="bg-green-400 active:bg-green-600 text-white font-black rounded p-4 col-span-2">=</button>
            </div>
          </div>
      </div>
  )
}

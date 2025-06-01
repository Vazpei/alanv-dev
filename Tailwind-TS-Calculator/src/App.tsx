import { useOperations } from "./hooks/useOperations";
import Calculator from "./components/Calculator";


function App() {
  
  const { suma,operation,setOperation } = useOperations()

  return (
    <>
      <div>
          <h2 className="text-center text-2xl mt-10 mb-10"> Calculadora de React,Vite,Typescript & Tailwind</h2>
      </div>
      <Calculator
        
      />
      <div>
        <h2 className="text-center mt-10">
          Alan Vazquez
        </h2>
      </div>
    </>
  )
}

export default App

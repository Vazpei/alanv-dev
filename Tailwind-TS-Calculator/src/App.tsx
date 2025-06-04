import { useOperations } from "./hooks/useOperations";
import Calculator from "./components/Calculator";


function App() {

  const { screenResult,setScreenResult,writingScreenR,makingCalc,activeOperator,setActiveOperator,finishedNumber } = useOperations()

  return (
    <>
      <div>
          <h2 className="text-center text-2xl mt-10 mb-10"> Calculadora de React,Vite,Typescript & Tailwind</h2>
      </div>
      <Calculator
        screenResult={screenResult}
        setScreenResult={setScreenResult}
        writeScreenR={writingScreenR}
        makingCalc={makingCalc}
        activeOperator={activeOperator}
        setActiveOperator={setActiveOperator}
        finishedNumber={finishedNumber}
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

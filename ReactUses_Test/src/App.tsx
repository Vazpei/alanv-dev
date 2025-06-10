
import Calculator from "./components/Calculator"
import useTests from "./hooks/useTests"

function App() {
  const { input,setInput,result,setResult,backspace,clear,calculate } = useTests()
  return (
    <>  
        <h2 className="text-3xl text-center pt-10 font-bold bg-blue-500 text-white pb-10 pl-5 pr-5 ">React + Typescript + Tailwind Calculator</h2>
        <Calculator
          input={input}
          setInput={setInput}
          result={result}
          setResult={setResult}
          backspace={backspace}
          clear={clear}
          calculate={calculate}
        />
    </>
  )
}

export default App

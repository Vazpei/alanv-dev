

type CalculatorProps = {
    input:string
    setInput:React.Dispatch<React.SetStateAction<string>>
    result:string
    setResult:React.Dispatch<React.SetStateAction<string>>
    backspace:() => void,
    clear:() => void,
    calculate:() => void,
}

export default function Calculator({ input,setInput,result,backspace,clear,calculate }:CalculatorProps) {
    const append = (n:string) =>{
        if(n === 'C' || n === 'AC' || n === '.'){
            console.log(`${n} was pressed`)
            switch(n){
                case 'C':
                    console.log("Entering case C");
                    clear()
                    break;
                case 'AC':
                    console.log("Entering case AC");
                    backingSpace()
                    break;
                case '.':
                    console.log("Entering case .");
                    const tokens = input.split(/[\+\-\*\/]/);
                    const currentNumber = tokens[tokens.length - 1];
                    if (currentNumber.includes(".")){
                        console.log("Point already exists");
                    }else{
                        setInput(prev => prev + n)
                    }
                    break;
            }
        }else{
            if(input === '0'){
            setInput('' + n)
            }else{
                setInput(prev => prev + n)
            }
        }
    }
    const sendOperation = () =>{
        console.log("Sending operation");
        calculate()
    }
    const backingSpace = () =>{
        backspace()
    }
    
  return (
    <>
    <div className="m-20">
        <h2 className="text-center font-bold mt-9 mb-9">
            Calculator
        </h2>
        <div className="flex flex-col items-center gap-3 m-2">
            <input type="text" name="" id="" className="bg-gray-300 rounded font-bold p-1 w-60 text-end" value={input} disabled/>
            <input 
                type="text" 
                name="" 
                id="" 
                className="bg-gray-300 text-2xl rounded font-bold p-1 w-60 text-end" 
                value={result}
                readOnly
            />
        </div>
        <div className="grid grid-cols-4 w-60 gap-1 m-auto">
            {['C','AC','(',')',1,2,3,'+',4,5,6,'-',7,8,9,'/'].map((n) => {
                return(
                <>
                    <button
                    className="bg-blue-500 text-2xl active:bg-blue-300 text-white font-bold p-3 rounded"
                    onClick={() => append(n.toString())}
                    >{n}</button>
                </>
                )
            })}
            <button className="bg-blue-500 text-2xl active:bg-blue-300 text-white font-bold p-3 rounded" onClick={() => append('.')}>.</button>
            <button className="bg-blue-500 text-2xl active:bg-blue-300 text-white font-bold p-3 rounded" onClick={() => append('0')}>0</button>
            <button className="bg-blue-500 text-2xl active:bg-blue-300 text-white font-bold p-3 rounded" onClick={() => append('*')}>*</button>
            <button className="bg-green-600 text-2xl text-white font-bold p-3 rounded" onClick={sendOperation}>=</button>
            
        </div>  
    </div>
    </>
  )
}

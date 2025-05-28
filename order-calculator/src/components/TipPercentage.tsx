


const tipOptions = [
  {
    id: 'tip-10',
    value: .10,
    label: '10%'
  },
  {
    id: 'tip-20',
    value: .20,
    label: '20%'
  },
  {
    id: 'tip-50',
    value: .50,
    label: '50%'
  }
]

type TipPercentageProps = {
  setTip: React.Dispatch<React.SetStateAction<number>>
}

export default function TipPercentage({setTip}: TipPercentageProps) {
  return (
    <>
    <h2 className="font-black">
      Propina
    </h2>
    <form action="">
      {tipOptions.map(tip => (
        <div key={tip.id}>
            <label htmlFor="">{tip.label}</label>
            <input 
              className="ml-2"
              type="radio"
              name="tip"
              id={tip.id}
              value={tip.value}
              onChange={e => setTip(+e.target.value)}//asi se accede al dato de un radiobutton
            />
        </div>
      ))}
    </form>
    </>
  )
}

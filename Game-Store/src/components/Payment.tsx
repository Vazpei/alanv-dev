

type PaymentProps = {
    page:string
    setPage: React.Dispatch<React.SetStateAction<string>>
}

export default function Payment({setPage}:PaymentProps) {
  return (
    <>
        <h2>Payment</h2>
        <div>
            Cart
        </div>
        <button onClick={() => setPage('home')}> Back</button>
    </>
  )
}

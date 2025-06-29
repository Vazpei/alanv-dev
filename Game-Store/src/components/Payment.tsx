import type { Game } from "../types"

type PaymentProps = {
    page:string
    setPage: React.Dispatch<React.SetStateAction<string>>
    cart: Game[]
}

export default function Payment({setPage,cart}:PaymentProps) {
  return (
    <>
        <h2>Payment</h2>
        <div>
            Cart
        </div>
        <div>
          {cart.map(game =>{
            return(
              <div>
                <div>
                  {game.name}
                </div>
              </div>
            )
          })}
        </div>
        <button onClick={() => setPage('home')}> Back</button>
    </>
  )
}

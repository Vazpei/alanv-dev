import type { CartItem } from "../types"

type PaymentProps = {
    total:number
    page:string
    cart: CartItem[]
    setPage: React.Dispatch<React.SetStateAction<string>>
    removeFromCart:(id:number) => void
    restoreCart: () => void
    increaseQty:(id:number) => void
    decreaseQty:(id:number) => void
}

export default function Payment({total,setPage,cart,removeFromCart,increaseQty,decreaseQty,restoreCart}:PaymentProps) {

  const ivaTotal = (total:number) =>{
    const newTotal = (total * .16)
    return newTotal + total
  }
  const buyItem = () =>{
    alert(`Thanks for buying your games`)
    restoreCart()
  }

  return (
    <>
        <button onClick={() => setPage('home')}> <img src="/img/back.svg" className="w-15 p-2 mt-5 ml-5 transition-all hover:scale-120" alt="" /></button>  
        <h2 className="text-center text-2xl font-bold">Payment</h2>
        <div className="all-menu flex flex-wrap gap-2 justify-center mt-8 mb-10">
          <div className="cart bg-slate-800 rounded w-110 p-5">
            <div className="font-bold mb-4 text-2xl">
            Cart
            </div>
            <div className="product-list flex flex-col gap-5">
              {
              cart.length === 0 
                ? <div>There is nothing left in your cart...</div>
                :
              cart.map(game =>{
                const { img,name,totalPrice,id,quantity } = game
                return(
                  <div className="flex flex-col gap-5 bg-slate-700 rounded p-3">
                    <div className="image-info flex justify-between gap-5 items-center">
                      <div className="flex items-center gap-2">
                        <div className="image"><img src={img} className="w-20 h-30" alt="" /></div>
                        <div className="info font-bold">{name}
                            <div className="quantity">Quantity:
                              <div className="quantity-section flex gap-2 text-center items-center">
                                <button 
                                  className="text-2xl transition-all active:scale-140"
                                  onClick={() => decreaseQty(id)}
                                >-</button>
                                <h2>{quantity}</h2>
                                <button 
                                  className="text-2xl transition-all active:scale-140"
                                  onClick={() => increaseQty(id)}
                                  >+</button>
                              </div>  
                            </div>
                            <div className="quantity-price flex justify-between">
                              <div className="price font-bold">${totalPrice}</div>
                            </div>
                        </div>
                      </div>
                      <div>
                        <img 
                          src="/img/trash.svg" 
                          className="transition-all hover:scale-125" 
                          alt=""
                          onClick={() => removeFromCart(id)}
                        />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="summary flex flex-col bg-slate-800 rounded w-110 h-75 p-5">
            <h2 className="font-bold">Summary</h2>
            <div className="products flex justify-between mt-5">
              <h2>Products: {cart.length}</h2>
              <h2>${total}</h2>
            </div>
            <div className="products flex justify-between mt-5">
              <h2>Total iva:</h2>
              <h2>${(total * .16).toFixed(2)}</h2>
            </div>
            <div className="total flex items-center justify-between mt-5">
              <div className="font-bold">{`Total (after iva):`}</div>
              <div className="text-3xl font-bold">${(ivaTotal(total)).toFixed(2)}</div>
            </div>
            <div className="payment-button mt-8">
              <button 
                className="w-full p-1 bg-yellow-300 font-bold text-black rounded h-10"
                onClick={() => buyItem()}
                >Checkout</button>
            </div>
          </div>
        </div>   
    </>
  )
}

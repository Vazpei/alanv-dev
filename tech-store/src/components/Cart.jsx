import './../styles/Cart.css'

export default function Cart({cart}){

    return(
        <>
            <div className="btnActiveCart">
                <button><img src="./../../public/img/shopping.svg" alt="" /></button>
            </div>
            <div className="cart">
                <h2 className='cartTitle'>Mi carrito</h2>
                <div className="cart-container">
                    {cart.map(item =>{
                        return(
                            <>
                            
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
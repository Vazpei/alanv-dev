import './../styles/Cart.css'

export default function Cart({cart}){

    function showCart(){
        const classExists = document.querySelector(".cart").classList.contains("displayon")
        console.log("classList ",classExists);
        if(classExists){
            document.querySelector(".cart").classList.remove("displayon");
            document.querySelector(".cart").classList.add("displayoff");
        }else{
            document.querySelector(".cart").classList.remove("displayoff");
            document.querySelector(".cart").classList.add("displayon");
        }
    }

    return(
        <>
            <div className="btnActiveCart">
                <button onClick={showCart}><img src="./../../public/img/shopping.svg" alt="" /></button>
            </div>
            <div className="cart displayoff">
                    <div className="cart-container">
                        <div className='cartTitle'>
                           <h2>Mi Carrito</h2>
                        </div>
                        {cart.map(item =>{
                                const { image,name,price,quantity } = item;
                                function increaseQty(){
                                    item.quantity++;
                                }
                                return(
                                    <>
                                        <div className="mini-card">
                                                <img src={image} alt="" />
                                                <p>{name}</p>
                                                <h2 className='Quantity'>Quantity: {quantity}</h2>
                                                <button onClick={()=>increaseQty()}>+</button>
                                                <h2 className='price'>${price} mxn</h2>
                                        </div>
                                    </>
                                )
                        })}
                        <div className="cart-buttons">
                            <button className='btn-e'>Limpiar Carrito</button>
                            <button className='btn-p'>Pagar</button>
                        </div>
                        <div className="close-card-btn">
                            <button><img src="./../../public/img/back.svg" alt="" onClick={showCart}/></button>
                        </div>
                    </div>
            </div>
        </>
    )
}
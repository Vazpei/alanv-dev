import { useState } from 'react';
import './../styles/Cart.css'


export default function Cart({cart,setCart,addToCart,setTotal,total}){
    
    const isEmpty = () => cart.length === 0;
    const cartTotal = () => cart.reduce((summary, item) => summary + (item.quantity * item.price),0)
    //Reduce checks the cart and add all that exists to operation
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
    function clearCart(){
        console.log("Clearing cart...........");
        setCart([]);
    }
    console.log("TOTAL: ",total);
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
                        {isEmpty() ? (
                            <p className='vaciop'>No hay articulos...</p>
                        ): 
                        cart.map(item =>{
                            const { image,name,price,quantity,id } = item;
                            function addingToCart(){
                                console.log("Adding to cart........");
                                addToCart(item);
                            }
                            
                            return(
                                <>
                                    <div className="mini-card">
                                            <p>id {id}</p>
                                            <img src={image} alt="" />
                                            <p>{name}</p>
                                            <h2 className='Quantity'>Quantity: {quantity}</h2>
                                            <button onClick={addingToCart} >+</button>
                                            <h2 className='price'>${price} mxn</h2>
                                    </div>
                                </>
                            )
                        })
                        }
                        <div className="total-label">
                            <h2>Total: ${cartTotal()}</h2>
                        </div>
                        <div className="cart-buttons">
                            <button className='btn-p'>Pagar</button>
                            <button className='btn-e'onClick={clearCart}>Limpiar Carrito</button>
                        </div>
                        <div className="close-card-btn">
                            <button><img src="./../../public/img/back.svg" alt="" onClick={showCart}/></button>
                        </div>
                        
                    </div>
            </div>
        </>
    )
}
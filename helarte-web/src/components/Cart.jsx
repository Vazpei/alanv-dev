import './../style/Cart.css'
export default function Cart({name,price,image,quantity,item}){

    function increaseQty(){
        item.quantity++;
    }
    return(
        <>
        <div className="mini-card">
            <div className="img-mini">
                <img src={image} alt="" />
            </div>
            <div className="mini-name">
                <p>{name}</p>
            </div>
            <div className="mini-quantity">
                <p>Cantidad: {quantity} <button onClick={increaseQty}>+</button></p>
                
            </div>
            <div className="mini-price">
                <h2>{price}</h2>
            </div>
        </div>
        </>
    )
}
import './../styles/Card.css'

export default function Card({addToCart,name,price,image,id,description,item}){
    function sendToCart(){
        addToCart(item)
        console.log(`adding ${name} to cart`);
    }
    return(
        <>
        <div className="card">
            <div className="img-card">
                <img src={image} alt="" />
            </div>
            <div className="title-card">
                <h2>{name}</h2>
            </div>
            <div className="description-card">
                <p>{description}</p>
            </div>
            <div className="price-card">
                <h2>{price}</h2>
            </div>
            <div className="btn-card">
                <button onClick={sendToCart}>Agregar</button>
            </div>
        </div>
        
        </>
    )
};

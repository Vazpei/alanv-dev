import './../styles/Card.css'

export default function Card({setCart,name,price,image,id,description,item}){
    function addToCart(){
        setCart(prevCart => [...prevCart,item]);
        console.log(`${name} added to cart....`);
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
                <button onClick={addToCart}>Agregar</button>
            </div>
        </div>
        
        </>
    )
};

import "./../style/Card.css";

export default function Card({name,key,price,image,description}){
    return(
        <>
            <div className="card">
                <div className="title-card">
                    <h2>{name}</h2>
                </div>
                <div className="img-card">
                    <img src={image} alt=""/>
                </div>
                <div className="card-description">
                    <p>{description}</p>
                </div>
                <div className="card-price">
                    <h2>{price}</h2>
                </div>
                <div className="card-btn">
                    <button className="add-pizza">Agregar</button>
                </div>
            </div>
            
        </>
    )
}
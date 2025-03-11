import { useState } from "react";
import "./../style/Card.css";

export default function Card({addToCart,pipsha,name,id,price,image,description,setCart}){
   
    function addingPipsha(){
        addToCart(pipsha);
        console.log("adding key:",id);
    }
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
                    <button
                    type="button" 
                    className="add-pizza"
                    onClick={() => addingPipsha()}
                    >Agregar</button>
                </div>
            </div>
            
        </>
    )
}
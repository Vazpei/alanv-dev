import { useState } from "react";
import type { Game } from "../types";


export default function useCart() {

    const [ cart,setCart ] = useState<Game[]>([])
    const [ game,setGame ] = useState<Game>({
        id:0,
        name:'Deafult',
        year:0,
        distributor:'',
        platform:'',
        price:0,
        img:''
    })

    const addToCart = () =>{
       if(game.id !== 0){
        setCart(prev => [...prev,game])
       } 
    }  

    return {
        cart,
        setCart,
        game,
        setGame,
        addToCart
    }

}

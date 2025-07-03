import { useEffect, useState } from "react";
import type { CartItem,Game } from "../types";

export default function useCart() {

    const [ cart,setCart ] = useState<CartItem[]>([]);
    const [ total,setTotal ] = useState<number>(0) 

    useEffect(() =>{
        console.log('Changing total...');
        const newTotal = cart.reduce((acc, game) => acc + game.totalPrice, 0);
        setTotal(newTotal)
    },[cart]);

    const addToCart = (item:Game) =>{
        if(item.id !== 0){
            const itemExistsOnCart = cart.find(game => game.id === item.id);
            if(itemExistsOnCart){
                console.log(`item ${item.name} already exists on cart...`);
                setCart(prev =>
                    prev.map(game => {
                        if(game.id === item.id) 
                        {
                            console.log(`Entering if game id and item id`);
                            const newQty = game.quantity++;
                            return{
                                ...game,
                                quantity:newQty,
                                totalPrice: game.unitPrice * newQty
                            }
                        }
                        else{ return game}
                        }
                    )
                )
            }else{
                console.log(`Setting new item ${item.name}`);
                setCart(prev => [...prev,{...item, quantity: 1, totalPrice:item.unitPrice}])
            }
        }
    }

    const restoreCart = () => setCart([])

    const increaseQty = (id:number) => {
        setCart(prev =>
            prev
            .map(game =>{
                if(game.id === id){
                    const newQty = game.quantity++
                    return{
                        ...game,
                        quantity: newQty,
                        totalPrice: game.unitPrice * newQty
                    }
                }else{
                    return game
                }
            })
        )
    }
    const decreaseQty = (id:number) => {
     setCart(prev =>
        prev
        .map(game =>{
            if(game.id === id){
                const newQty = game.quantity--
                return{
                    ...game,
                    quantity:newQty,
                    totalPrice: game.unitPrice * newQty
                }
            }
            else{
                return game
            }
        }).filter(game => game.quantity > 0)
     )
    } 
    const removeFromCart = (id:number) =>{
        const newCart = cart.filter(game => game.id !== id);
        setCart(newCart)
    }
    return {
        total,
        cart,
        setCart,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        restoreCart,
    }

}

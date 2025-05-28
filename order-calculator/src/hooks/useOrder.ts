import { useState } from "react"
import type { MenuItem, OrderItem, TotalOrder } from "../types";


export default function useOrder(){
    //Creamos un state que sea una lista de objetos tipo OrderItem
    const [ order, setOrder ] = useState<OrderItem[]>([]);
    const [ tip, setTip ] = useState(0)

    const addItem = (item: MenuItem) => {
        //Para agregar un nuevo item al carrito debemos verificar que no exista para esto utilizamos un if el cual va a mapear cada articulo de order para revisar que no exista el item.
        
        const itemExists = order.find(orderItem => orderItem.id === item.id)
        if(itemExists){
            console.log("Item ya existente en Order sumando cantidad de:",item.name);
            //Creamos un nuevo pero actualizando la cantidad de los elementos existentes.
            const updatedOrder = order.map( orderItem => orderItem.id === item.id ? {...orderItem,quantity: orderItem.quantity + 1} : orderItem )
            setOrder(updatedOrder)
        }else{
            const newItem = {...item, quantity: 1}
            setOrder([...order,newItem])
        }
        
    }
    const [totalOrder,setTotalOrder] = useState<TotalOrder>({total:0});

    const removeItem = (id: MenuItem['id']) =>{
       setOrder(order.filter( item => item.id !== id));
       console.log(order);
    }

    console.log(order);
    return{
        order,
        addItem,
        totalOrder,
        removeItem,
        setTotalOrder,
        tip,
        setTip
    }
}
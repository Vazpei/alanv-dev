import { useMemo } from "react"
import type { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalsProps = {
    order: OrderItem[],
    tip: number,
    placeOrder: () => void,
    resetOrder: () => void
}


export default function OrderTotals({order,tip,placeOrder,resetOrder}:OrderTotalsProps) {

    const subtotalAmount = useMemo(() => order.reduce((total,item) => total + (item.quantity * item.price), 0),[order])
    const tipAmount = useMemo(() => subtotalAmount * tip, [ tip, order ])
    const totalAmount = useMemo(() => subtotalAmount + tipAmount,[ tip,order ])

    const checkCart = () => {
        if(totalAmount === 0){
            alert('No hay nada en la orden')
        }else{
            alert('Orden guardada')
        }
    }

    return(
    <>
        <div>
            <h2>
                Totales y propina
            </h2>
            <p>
                Subtotal a pagar: <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
            </p>
            <p>
                Propina: <span className="font-bold">{formatCurrency(tipAmount)}</span>
            </p>
            <p className="text-2xl border-t-2 mt-2">
                Total a pagar: <span className="font-bold text-red-600">{formatCurrency(totalAmount)}</span>
            </p>
        </div>
        <button 
            className="w-full bg-black p-2 text-white font-black rounded mt-4 active:bg-rose-600"
            onClick={placeOrder}
        >
            Guardar Orden
        </button>
        <button 
            className="bg-rose-600 active:bg-rose-400 text-white p-2 font-black rounded w-full"
            onClick={resetOrder}
            >
            Borrar orden
        </button>
    </>
  )
}

import { useMemo } from "react"
import type { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalsProps = {
    order:OrderItem[]
}


export default function OrderTotals({order}:OrderTotalsProps) {

    const subtotalAmount = useMemo(() => order.reduce((total,item) => total + (item.quantity * item.price), 0),[order])


    return(
    <>
        <div>
            <h2>
                Totales y propina
            </h2>
            <p>
                Subtotal a pagar: <span className="font-bold">{formatCurrency(subtotalAmount)}0</span>
            </p>
            <p>
                Propina: <span className="font-bold">{""}$0</span>
            </p>
            <p>
                Total a pagar: <span className="font-bold">$0</span>
            </p>
        </div>
    </>
  )
}

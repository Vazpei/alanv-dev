import { useMemo } from "react"
import type { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalsProps = {
    order: OrderItem[],
    tip: number
}


export default function OrderTotals({order,tip}:OrderTotalsProps) {

    const subtotalAmount = useMemo(() => order.reduce((total,item) => total + (item.quantity * item.price), 0),[order])

    const tipAmount = useMemo(() => subtotalAmount * tip, [ tip, order ])

    const totalAmount = useMemo(() => subtotalAmount + tipAmount,[ tip,order ])

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
    </>
  )
}

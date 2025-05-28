import { formatCurrency } from "../helpers"
import type { MenuItem, OrderItem, TotalOrder } from "../types"

type OrderContentsProps = {
    order: OrderItem[],
    removeItem: (id:MenuItem['id']) => void,
    total: TotalOrder
}

export default function OrderContents({order,removeItem} :OrderContentsProps) {
  return (
    <div>
        <h2 className='font-bold text-2xl  text-rose-500'>
            Consumo
        </h2>
        <div>
            {
                order.length === 0 ?
                <p className="font-bold text-2xl">
                    No hay nada aun...
                </p>:
                (
                    order.map(item => (
                        <div key={item.id} className="border border-dashed border-gray-400 mt-2 rounded p-2">
                            <div className="flex justify-between">
                                <div className="flex flex-col w-full">
                                    <div className="font-black">
                                        {item.name}
                                    </div>
                                    <div>
                                        Cantidad: 
                                        <span>
                                            {item.quantity}
                                        </span>
                                        
                                    </div>
                                    <div className="font-black text-green-600">
                                        Precio: {formatCurrency(item.price * item.quantity)}
                                    </div>
                                </div>
                                <div>
                                    <button className="bg-red-700 h-8 w-8 rounded-2xl text-white font-black active:bg-red-400" onClick={() => removeItem(item.id)}>X</button>
                                </div>
                            </div>
                        </div>
                    ))
                )
            }
        </div>
    </div>
  )
}

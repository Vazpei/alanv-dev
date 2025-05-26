
import MenuItem from "./components/MenuItem";
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder";
import OrderContents from "./components/OrderContents";

function App() {
  const { order, addItem, totalOrder } = useOrder()
  return (
    <>
      <header className="bg-indigo-500 py-5">
        <h1 className="text-center text-4xl text-white">Calculadora de propinas</h1>
      </header>
      <main className="max-w-7xl mx-auto pt-20 grid md:grid-cols-2 gap-2">
        <div>
          <h2 className="text-indigo-500 font-bold text-3xl">Menu</h2>
          <div className="space-y-3">
            {menuItems.map(item => (
            <MenuItem
              key={item.id}
              item={item}
              addItem={addItem}
            />
            ))}
          </div>
        </div>
        <div>
          
          <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-2">
            <OrderContents
              order={order}
              total={totalOrder}
            />
          </div>
        </div>
      </main>
    </>
  )
}

export default App

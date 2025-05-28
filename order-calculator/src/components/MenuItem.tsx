import type { MenuItem } from "../types"

type MenuItemProps = {
  item: MenuItem,
  addItem: (item: MenuItem) => void
}

export default function MenuItem({item,addItem} : MenuItemProps) {
  return (
    <button className="border-1 rounded-2xl border-rose-500 w-full p-3 flex justify-between hover:bg-rose-500 hover:text-white transition-transform scale-100 hover:scale-105" 
    onClick={() => addItem(item)}>
     <p>{item.name}</p>
     <p className="font-black">{item.price}</p>
    </button>
  )
}

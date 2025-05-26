import type { MenuItem } from "../types"

type MenuItemProps = {
  item: MenuItem,
  addItem: (item: MenuItem) => void
}

export default function MenuItem({item,addItem} : MenuItemProps) {
  return (
    <button className="border-2 border-indigo-500 w-full p-3 flex justify-between hover:bg-indigo-300" 
    onClick={() => addItem(item)}>
     <p>{item.name}</p>
     <p className="font-black">{item.price}</p>
    </button>
  )
}

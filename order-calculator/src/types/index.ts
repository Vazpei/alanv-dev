
//tipo de dato que es MenuItem como un objeto
export type MenuItem = {
    id: number,
    name: string,
    price: number
}
//tomamos los atributos de Order Item y agregamos quantity.
export type OrderItem = MenuItem &{
    quantity: number
}
export type TotalOrder = {
    total:number
}

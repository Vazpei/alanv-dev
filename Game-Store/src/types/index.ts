

export type Game = {
    id:number,
    name:string,
    year:number,
    distributor:string,
    platform:string,
    unitPrice:number,
    img:string
}

export type CartItem = Game & {
    quantity:number
    totalPrice:number
}
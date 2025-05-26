
export function formatCurrency(quantity: number){
    return new Intl.NumberFormat('en-Us',{
        style:'currency',currency:'USD'
    }).format(quantity)
}

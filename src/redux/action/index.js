//for add item to cart 
export const addcart = (Product)=> {
    return{
        type: "ADDITEM",
        payload : Product
    }
}

//for delete item to cart 
export const delcart = (Product)=> {
    return{
        type: "DELITEM",
        payload: Product
    }
}
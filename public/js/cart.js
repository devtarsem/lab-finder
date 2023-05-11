const addToCart = async(product)=>{
    const cart = await axios({
        method : 'POST',
        url : 'http://127.0.0.1:6300/api/v1/detail/add-to-cart',
        data : {
            product : product
        }
    })
    if(cart.data.status === 'sucess' ){
        window.location.reload()
    }
}

const addtoCardProductBtn = document.querySelectorAll('.addtoCardProductBtn')
addtoCardProductBtn.forEach(el=>{
    el.addEventListener('click', (e)=>{
        e.preventDefault()
        const product_name = e.target.parentNode.children[0].innerHTML
        const product_price = e.target.parentNode.children[1].innerHTML
        const product_shopname = e.target.parentNode.children[e.target.parentNode.children.length - 1].innerHTML

        const productAddedToCart = {
            product_name : product_name,
            product_price : product_price,
            product_shopname : product_shopname
        }
        addToCart(productAddedToCart)
    })
})

/**************removing item from cart */

const itemRemoving = async (removeItem)=>{
    const removeItemFromCart = await axios({
        method : 'POST',
        url : 'http://127.0.0.1:6300/api/v1/detail/remove-item',
        data : {
            removeItem : removeItem
        }
    })
    if(removeItemFromCart.data.status==='sucess'){
        window.location.reload()
    }
}

const removeCartItemBtn = document.querySelectorAll('.delete-product')
removeCartItemBtn.forEach(el=>{
    el.addEventListener('click', e=>{
        console.log(e.target.parentNode.children)
        const removed_product_name = e.target.parentNode.children[0].innerHTML
        const removed_product_price = e.target.parentNode.children[1].innerHTML
        // const removed_shop_name = e.target.parentNode.children[4].innerHTML
        const removeItem = {
            product_name : removed_product_name,
            product_price : removed_product_price
            // product_shopname : removed_shop_name
        }
        itemRemoving(removeItem)
    })
})
/***********************quantity setting*/

const pricingNew = async(newPricedObject)=>{
    const price = await axios({
        method : 'POST',
        url : "http://127.0.0.1:6300/api/v1/detail/cart-inhencer",
        data : {
            newPricedObject : newPricedObject
        }
    })
    // if(price.data.status==='sucess'){
    //     window.location.reload()
    // }
}

let itemNumber = 0;
const quantity = document.querySelectorAll('.cartquantity-inhencer')
quantity.forEach(el=>{
    el.addEventListener('click', e=>{
        console.log(e.target.parentNode.children)
        let priceOfItem = e.target.parentNode.parentNode.children[1].innerHTML
        const product_name = e.target.parentNode.parentNode.children[0].innerHTML
        const quantityOfItem = e.target.parentNode.children[0].value
        const newPrice = Number(quantityOfItem) * Number(parseInt(priceOfItem))
        console.log(newPrice)
        const newPricedObject = {
            product_name : product_name,
            product_price : priceOfItem,
            newPrice : newPrice,
            quantityOfItem : quantityOfItem
        }
        pricingNew(newPricedObject)
    })
})
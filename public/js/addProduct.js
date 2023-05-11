/*************overlay */
const popUpProductAdded = document.querySelector('.addProductPopUp')
popUpProductAdded.style.opacity = '0'
popUpProductAdded.style.zIndex = '-2'
const overlayPopUpAddProduct = document.querySelector('.overlay-add-product')
overlayPopUpAddProduct.style.opacity = '0'
overlayPopUpAddProduct.style.zIndex = '-3'


const addingProduct = async (product, catagory)=>{
    const add = await axios({
        method : 'POST',
        url : "http://127.0.0.1:6300/api/v1/open-store/add-products/add-new-product",
        data : {
            product : product,
            catagory : catagory
        }
    })
    if(add.data.status==='success'){
        popUpProductAdded.style.opacity = '1'
        popUpProductAdded.style.zIndex = '3'
        overlayPopUpAddProduct.style.opacity = '1'
        overlayPopUpAddProduct.style.zIndex = '2'
        setInterval(e=>{
            popUpProductAdded.style.opacity = '0'
            popUpProductAdded.style.zIndex = '-2'
            overlayPopUpAddProduct.style.opacity = '0'
            overlayPopUpAddProduct.style.zIndex = '-3'  

        },1500)
        window.location.reload()
    }
}
overlayPopUpAddProduct.addEventListener('click', (e)=>{
    e.preventDefault()
    popUpProductAdded.style.opacity = '0'
    popUpProductAdded.style.zIndex = '-2'
    overlayPopUpAddProduct.style.opacity = '0'
    overlayPopUpAddProduct.style.zIndex = '-3' 
})
document.querySelector('.addProductToShopBtn').addEventListener('click', (e)=>{
    e.preventDefault()
    const productName = document.querySelector('.productName').value ;
    const productPrice = document.querySelector('.productPrice').value ;
    const productDes = document.querySelector('.productDes').value ;
    const productImage = '/img/shop6.jpg';
    const productCatagory = document.querySelector('.productCatagory').value 

    const product = {
        image : productImage,
        shop_name : productName,
        price : productPrice,
        product_des : productDes
    }
    addingProduct(product, productCatagory)
})

/************************************removing products from inventory***************** */
const removeSurePOPUP = document.querySelector('.delete-product-from-inventory')
const removeConfirmationBtn = document.querySelector('.removeConfirmationBtn')
removeSurePOPUP.style.opacity = '0'
removeSurePOPUP.style.zIndex = '-2'
const removeItem = async (product_name, product_price, product_des, catagory)=>{
    const removing = await axios({
        method : 'POST',
        url : "http://127.0.0.1:6300/api/v1/open-store/add-products/add-new-product/remove",
        data : {
            product_name : product_name,
            product_price : product_price,
            product_des : product_des,
            catagory : catagory
        }
    })
    if(removing.data.status==='success'){
        window.location.reload()
    }
}


const removebtn = document.querySelectorAll('.removeVisibleProduct--common')
removebtn.forEach(el=>{
    el.addEventListener('click', (item)=>{
        item.preventDefault()
        console.log()
        const product_name_To_be_removed = item.target.parentNode.children[1].children[0].innerHTML;
        const product_price_To_be_removed = item.target.parentNode.children[1].children[1].innerHTML;
        const product_des_to_be_removed = item.target.parentNode.children[1].children[3].innerHTML;
        const catagory_to_be_removed = item.target.parentNode.children[1].children[2].innerHTML;
        removeSurePOPUP.style.opacity = '1'
        removeSurePOPUP.style.zIndex = '3'
        overlayPopUpAddProduct.style.opacity = '1'
        overlayPopUpAddProduct.style.zIndex = '3'
        removeConfirmationBtn.addEventListener('click', (e)=>{
            e.preventDefault()
            removeItem(product_name_To_be_removed, product_price_To_be_removed, product_des_to_be_removed, catagory_to_be_removed);
        })
        
    })
})
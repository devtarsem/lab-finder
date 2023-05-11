const personalSettingPanel = document.querySelector('.personal-settings')
const myShopSettingPanel = document.querySelector('.my-shop-settings')
const inventory_product_change_panel = document.querySelector('.change-product-pop-up')
const updateProductBtn = document.querySelectorAll('.update-product')
const cancelInventoryPanel = document.querySelector('.cancelbtn-inventory-product')


personalSettingPanel.style.left = '100%'
myShopSettingPanel.style.left = '100%'
inventory_product_change_panel.style.left = '100%'

document.querySelector('.functionalityBtn--personal-setting').addEventListener('click', (e)=>{
    e.preventDefault()
    personalSettingPanel.style.left = '0%'
    personalSettingPanel.style.transition = 'all 1s'
    myShopSettingPanel.style.left = '100%'

})
document.querySelector('.functionalityBtn-myShop--setting').addEventListener('click', (e)=>{
    e.preventDefault()
    personalSettingPanel.style.left = '100%'
    personalSettingPanel.style.transition = 'all 1s'
    myShopSettingPanel.style.left = '0%'
    myShopSettingPanel.style.transition = 'all 1s'
})

const updatedablePrevProductName = document.querySelector('.prev-product-name')
const updatedablePrevProductPrice = document.querySelector('.prev_product_price')
const updatedablePrevProductDes = document.querySelector('.prev_product_des')
const updatedablePrevProductSpecility = document.querySelector('.prev_specility_of_shop')
updateProductBtn.forEach(el=>{
    el.addEventListener('click', (e)=>{
        console.log()
        updatedablePrevProductName.textContent = e.target.parentNode.children[0].innerHTML
        updatedablePrevProductPrice.textContent = e.target.parentNode.children[1].innerHTML
        updatedablePrevProductDes.textContent = e.target.parentNode.children[2].innerHTML
        updatedablePrevProductSpecility.textContent = e.target.parentNode.children[3].innerHTML
        inventory_product_change_panel.style.left = '0%'
        inventory_product_change_panel.style.zIndex = '5'
        myShopSettingPanel.style.opacity = '0.5'
        inventory_product_change_panel.style.transition = 'all 1s'

    })
})
cancelInventoryPanel.addEventListener('click', (e)=>{
    inventory_product_change_panel.style.left = '100%'
    inventory_product_change_panel.style.zIndex = '0'
    myShopSettingPanel.style.opacity = '1'
    inventory_product_change_panel.style.transition = 'all 1s'
})



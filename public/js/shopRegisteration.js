/**********************congratulation popup ************/
const congoPopUp = document.querySelector('.open-store-popup')
congoPopUp.style.opacity = '0'
congoPopUp.style.zIndex = '-2'
const overlay_store = document.querySelector('.overlay-store-open')
overlay_store.style.opacity = '0'
overlay_store.style.zIndex = '-3'


const openingStore = async (shop_name, catagory, special, location, image)=>{
    const open = await axios({
        method : 'POST',
        url : 'http://127.0.0.1:6300/api/v1/open-store/new-store',
        data : {
            shop_name : shop_name,
            catagory : catagory,
            special : special, 
            location:location,
            image : image
        }
    })
    if(open.data.status==='success'){
        congoPopUp.style.opacity = '1'
        congoPopUp.style.zIndex = '3'
        overlay_store.style.opacity = '1'
        overlay_store.style.zIndex = '2'
        congoPopUp.style.transition = 'all 0.5s'
        overlay_store.style.transition = 'all 0.5s'

    }
}


document.querySelector('.openStoreBtn').addEventListener('click', (e)=>{
    e.preventDefault()
    const shop_name = document.querySelector('.open_shop_name').value 
    const catagory = document.querySelector('.open_shop_catagory').value 
    const location = document.querySelector('.open_shop_location').value 
    const special = document.querySelector('.open_shop_special').value 
    const image = '/img/shop5.jpg'
    openingStore(shop_name, catagory, location, special, image)

})


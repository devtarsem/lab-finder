/****************************menubar implimentation */
const menubar = document.querySelector('.menubar')
menubar.style.zIndex = '5'
const closeMenubar = document.querySelector('.cancel-icon')
const openMenubar = document.querySelector('.menu-icon')
const backOverlay = document.querySelector('.overlay')
backOverlay.style.opacity = 0
backOverlay.style.zIndex = -3


menubar.style.right = '-100%'
closeMenubar.style.display = 'none'

openMenubar.addEventListener('click', (e)=>{
    e.preventDefault()
    menubar.style.right = '0%'
    menubar.style.transition = 'all 0.2s'
    openMenubar.style.display = 'none'
    closeMenubar.style.display = 'block'
    backOverlay.style.opacity = 1
    backOverlay.style.zIndex = 3
})

closeMenubar.addEventListener('click', (e)=>{
    e.preventDefault()
    menubar.style.right = '-100%'
    menubar.style.transition = 'all 0.5s'
    openMenubar.style.display = 'block'
    closeMenubar.style.display = 'none'
    backOverlay.style.opacity = 0
    backOverlay.style.zIndex = -3
})



// const link = document.querySelectorAll('.menubar-link')
// link.forEach(el=>{
//     el.addEventListener('click', e=>{
//         e.preventDefault()
//     })
// })
const signupPanel = document.querySelector('.signup-section')
const loginPanel = document.querySelector('.login-section')

const overlay = document.querySelector('.overlay')
const errorPanel = document.querySelector('.error-message')
const errorValue = document.querySelector('.error-message-value')

errorPanel.style.transform = 'translateY(-100%)'

signupPanel.style.opacity = 0
signupPanel.style.zIndex = -2
loginPanel.style.opacity = 0
loginPanel.style.zIndex = -2
overlay.style.opacity = 0
overlay.style.zIndex = -3

document.querySelector('.signup-js').addEventListener('click', (e)=>{
    e.preventDefault()
    signupPanel.style.opacity = 1
    signupPanel.style.zIndex = 2
    signupPanel.style.transition = 'all 0.3s'
    overlay.style.opacity = 1
    overlay.style.zIndex = 1
})


/*****************************emplimenting the signup functionality */

const errorFunction = (msg)=>{
    errorValue.textContent = msg
    errorPanel.style.transform = 'translateY(0%)'
    errorPanel.style.transition = 'all 0.3s'
}
const signupTheUser = async (username, email, password, catagory)=>{
    const signing = await axios({
        method : 'POST',
        url : 'http://127.0.0.1:6300/api/v1/signup',
        data : {
            username : username,
            email : email,
            password : password,
            catagory : catagory
        }
    })
    if(signing.data.data.user){
        errorFunction("the username already exists")
    }
    if(signing.data.status=='success'){
        window.location.reload()
    }
}


document.querySelector('.signup-btn').addEventListener('click', (e)=>{
    e.preventDefault()
    const username = document.querySelector('.username-signup').value 
    const email = document.querySelector('.email-signup').value 
    const password = document.querySelector('.password-signup').value 
    const confirmpassword = document.querySelector('.ConfirmPassword-signup').value 
    const catagory = document.querySelector('.catagory-signup').value
    console.log(username, email, password, confirmpassword, catagory) 
    if(password.trim().length==0 || password.trim().length<8){
        errorFunction('the password must be of atleast 8 character')
        return
    }
    if(password.trim().includes('@')){
    }
    if(password!=confirmpassword){
        errorFunction('The password does not match with confirm password')
        return
    }
    if(catagory=='choose below'){
        errorFunction('Choose valid catagory')
        return
    }
    signupTheUser(username, email, password, catagory)
})

/*********************implimenting login functionality */
document.querySelector('.login-js').addEventListener('click', (e)=>{
    e.preventDefault()
    loginPanel.style.opacity = 1
    loginPanel.style.zIndex = 2
    loginPanel.style.transition = 'all 0.3s'
    overlay.style.opacity = 1
    overlay.style.zIndex = 1
})

const logingUser = async(email, password)=>{
    const logging = await axios({
        method : 'POST',
        url : 'http://127.0.0.1:6300/api/v1/login',
        data : {
            email : email,
            password : password
        }
    })
    if(logging.data.data.msg){
        errorFunction(logging.data.data.msg)
    }
    if(logging.data.status=='success'){
        window.location.reload()
    }

}

document.querySelector('.login-btn').addEventListener('click', (e)=>{
    e.preventDefault()
    const emailLOGIN = document.querySelector('.email-login').value 
    const passwordLOGIN = document.querySelector('.password-login').value 
    logingUser(emailLOGIN, passwordLOGIN)

})
/**********************overlay */

overlay.addEventListener('click', (e)=>{
    e.preventDefault()
    signupPanel.style.opacity = 0
    signupPanel.style.zIndex = -2
    signupPanel.style.transition = 'all 0.3s'
    loginPanel.style.opacity = 0
    loginPanel.style.zIndex = -2
    loginPanel.style.transition = 'all 0.3s'
    overlay.style.opacity = 0
    overlay.style.zIndex = -1
    errorPanel.style.transform = 'translateY(-100%)'

})


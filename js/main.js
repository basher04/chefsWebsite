const dark = document.getElementById('dark')



if(localStorage.getItem('dark')){
    document.body.classList.add("darkMode")
}


dark.addEventListener('click',function darkMode(){
    document.body.classList.toggle("darkMode");
    if(document.body.classList.contains("darkMode")){
        localStorage.setItem('dark','dark-mode')
    }else{
        localStorage.removeItem('dark')
    }
})



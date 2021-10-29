const iconoinicio = document.querySelector('.iconoinicio')
const menu = document.querySelector('.menu-navegacion')


iconoinicio.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})

window.addEventListener('click', e =>{
    if(menu.classList.contains('spread') 
        && e.target != menu && e.target != iconoinicio){
        console.log('cerrar')
        menu.classList.toggle("spread")
    }
})
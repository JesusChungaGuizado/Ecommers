// ---------LOADER__LOADING ------------
window.addEventListener("load",()=>{
    // document.getElementById("bodys").style.overflow="hidden";
    document.querySelector("body").classList.remove("hidden");
    document.querySelector(".loader").classList.toggle("loader2");
   
})

// -----------MENU RESPONSIVE------------------
let icono=document.querySelector(".show");
let menu=document.querySelector("#menu");
icono.addEventListener("click",()=>{
    menu.classList.toggle("menuE");
})
// si el tamaño de pantalla es mayor a 680px removemos la clase
window.addEventListener('resize',function(){
    if(this.screen.width>680){
        menu.classList.remove("menuE");
    
    }
})
// ---------------DESPLAZAMIENTO DE MENU DE NAVEGACION----------
// buscamos la posicion del scroll
let ubicacionPrincipal=window.pageYOffset;
// console.log(ubicacionPrincipal)
window.addEventListener("scroll",function(){
    let desplazamientoActual=window.pageYOffset;
    // console.log(ubicacionPrincipal)
    if (ubicacionPrincipal>=desplazamientoActual) {
        document.querySelector(".container-nav").style.top="0px";
    } else {
        document.querySelector(".container-nav").style.top="-100px";
    }
    ubicacionPrincipal=desplazamientoActual;
})


//-----------EFECTOS LINKS SELECIONADOS--------------------
let links=document.querySelectorAll(".links");
links.forEach((listado)=>{
    listado.addEventListener("click",()=>{
        links.forEach((lis)=>{
            lis.classList.remove("resaltado");
        });
        listado.classList.add("resaltado");
    });
});

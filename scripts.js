$acordeon_item=document.querySelectorAll(".acordeon__title");

const removeClass=()=>{
   $acordeon_item.forEach(element => {
        element.classList.remove("acordeon__title--active");
        element.children[0].classList.remove("acordeon__icon--rotate");
        element.nextElementSibling.classList.remove("acordeon__text--active");
   });
} 
Array.from($acordeon_item).map(element => {
    element.addEventListener("click",(e)=>{
        let $acordeonicon=e.currentTarget.children[0];
        let $acordeonText=e.currentTarget.nextElementSibling;
        let $acordeonTitle=e.currentTarget;
       
        if(!$acordeonTitle.classList.contains("acordeon__title--active")){
            removeClass()
            $acordeonText.classList.add("acordeon__text--active");
            $acordeonTitle.classList.add("acordeon__title--active")
            $acordeonicon.classList.add("acordeon__icon--rotate");
        }else{
            $acordeonText.classList.remove("acordeon__text--active");
            $acordeonTitle.classList.remove("acordeon__title--active")
            $acordeonicon.classList.remove("acordeon__icon--rotate");
        }
            
       
    })
})
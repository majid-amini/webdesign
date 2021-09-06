const circles = document.querySelectorAll('.circle');


for (let item of circles){
    item.addEventListener('click',function(event){
       event.target.classList.toggle('redbg');
        
    })
}
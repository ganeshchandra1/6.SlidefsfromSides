const boxes=document.querySelectorAll('.box')
window.addEventListener('scroll',checkBoxes)
checkBoxes()
function checkBoxes(){
    const wh=window.innerHeight / 5 * 4;
    console.log(wh)
    boxes.forEach(box=>{
        const boxTop=box.getBoundingClientRect().top
        if(boxTop<wh){
            box.classList.add('show')
            
        }
        else{
            box.classList.remove('show')
        }
    })
}

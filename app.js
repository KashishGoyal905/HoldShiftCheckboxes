const checkboxes = document.querySelectorAll("input[type=checkbox]");
let lastcheck;

function handelClick(e){
let inBetween = false;
if(e.shiftKey && this.checked) {
    checkboxes.forEach(checkbox =>{
        if(checkbox == this || checkbox == lastcheck){
            inBetween = !inBetween;
        }
        if(inBetween){
            checkbox.checked =true;
        }
    });
}
lastcheck =this;
}

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click',handelClick)
});
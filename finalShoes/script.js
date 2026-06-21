let buttons=document.querySelectorAll(".add-cart")
buttons.forEach(btn => {
    btn.addEventListener("click",function(){
        alert("button clicked")
    })
});
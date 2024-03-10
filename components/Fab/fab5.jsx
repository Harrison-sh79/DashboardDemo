if (typeof document !== "undefined") {
   
   var button = document.querySelector(".faoptions .outer-button");

   button.addEventListener("click", function(){
      button.parentElement.classList.toggle('open');
   })

   // btnEl.onclick = (el) => {
   //   btnEl.parentElement.classList.toggle('open');
   // };
   
}

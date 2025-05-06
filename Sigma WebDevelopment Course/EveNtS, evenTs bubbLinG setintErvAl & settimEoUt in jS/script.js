let button = document.getElementById("btn")

//https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

button.addEventListener("click", ()=>{
  
    document.querySelector(".box").innerHTML = `<b> You have clicked button </b>`;
})
button.addEventListener("dblclick", ()=>{
  
  document.querySelector(".box").innerHTML = `<b> You have double clicked button </b>`;
})
button.addEventListener("mouseover", ()=>{
  
  document.querySelector(".box").innerHTML = `<b> You have hovered over button </b>`;
})
button.addEventListener("contextmenu", ()=>{   
  
 alert("don't hack us by right click")
})
document.addEventListener("keydown", (e)=>{
  // alert("don't press this")
  console.log(e)
  console.log(e.key)
  console.log(e.keycode)
 })
  
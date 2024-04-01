document.addEventListener("DOMContentLoaded", () =>{

let time = document.getElementById("timep");

setInterval(() =>{
    let d = new Date();
    time.innerHTML = d.toLocaleTimeString();
}, 1000)

});



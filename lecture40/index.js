

let btn = document.querySelector("#reveal-gift")
let h2 = document.querySelector("#gift")

function revealGift(){
    console.log("iphone 100000 pro max");
    // h2.classList.remove("hidden")
    h2.classList.toggle("hidden")
    h2.classList.add("visible")
}

// btn.addEventListener('click' , function(){
//     console.log("hello hello mic check");
// })


// btn.addEventListener('click' , () => {
//     console.log("hello hello mic check");
// })

btn.addEventListener('click' , revealGift)
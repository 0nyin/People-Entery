// Document.getElementById("count").innerText = 5



let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let lookEl = document.getElementById("look-el")
   
let count = 0

function increment () {
    count += 1
    countEl.textContent = count
        
}



function save () {
   let countStr = count + " - "
   saveEl.textContent += countStr
   countEl.textContent = 0
   count = 0
    
}

function subAction () {
    let minusNumb = count - 1  + " - "
    lookEl.innerText += minusNumb
}

// let welcomEl = document.getElementById("count-el")

// let name = "amarachi"
// let greetings = "welcome back "


// welcomEl.innerText = greetings + name

// welcomEl.innerText += "👋!"

// DOM is how you use javascript to modify a website
// document = HTML document
// document  is of the data object
// Model is a representation or a modulation
// the real vs the representation or model

// let firstName = "matter"
// let lastName = "joe"
// let fullName = firstName " . " lastName
// console.log(fullName)
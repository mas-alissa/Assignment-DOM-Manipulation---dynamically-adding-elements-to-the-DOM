let buttons = document.querySelectorAll(".big-five-button")
let spottedAnimals = document.getElementById("spotted-animals-list");
let spottedAnimalsList = document.querySelectorAll(".spotted-animals-list-item")
// part 1

for (var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click",function(){
        console.log(this.innerHTML) // here to see the result in the console
        let newLi = document.createElement("li");
        newLi.classList.add("spotted-animals-list-item")
        newLi.innerHTML = this.innerHTML;
        spottedAnimals.appendChild(newLi)
    })
}

// part 2

let removerFirstItem = document.getElementById("remove-first-item-button")

removerFirstItem.addEventListener("click",function(){
    spottedAnimals.removeChild(spottedAnimals.childNodes[0])
})

// part 3
let removerAllItems = document.getElementById("remove-all-button");
removerAllItems.addEventListener("click",function(){
    spottedAnimals.innerHTML = "";
})


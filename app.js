const elForm = document.querySelector('#form');
const elNameInput = elForm.querySelector('#name-input');
const elRelInput = elForm.querySelector('#rel-input');
const elTelInput = elForm.querySelector('#tel-input');
const elList = document.querySelector('#list');

// Create element uchun funksiya
let createEl = function(el, elClass, text){
    let newEl = document.createElement(el)

    if(elClass){
        newEl.setAttribute('class', elClass)
    }
    if(text){
        newEl.textContent = text
    }
    return newEl
}

// Telefon raqam uchun array
const phoneNum = [];

// Inputlarni bo'shatib olish
const emptyInputs = function(){
    elNameInput.value = ""
    elRelInput.value = ""
    elTelInput.value = ""
}

// Element qoshish
if(elForm){
    elForm.addEventListener('submit', function(e){
        e.preventDefault()

        // Inputdan olingan malumotlarni birinchi harfini kattartirish 
        const upH3 = elNameInput.value[0].toUpperCase()+ elNameInput.value.slice(1).toLowerCase()
        const upP = elRelInput.value[0].toUpperCase()+ elRelInput.value.slice(1).toLowerCase()

        let li = createEl('li', 'border py-2 px-4')
        let h3 = createEl('h3', 'text-blue-500 font-bold', upH3)
        let p = createEl('p', '', upP)
        let p2 = createEl('p', '', elTelInput.value)

        li.appendChild(h3)
        li.appendChild(p)
        li.appendChild(p2)

        if(phoneNum.includes(elTelInput.value)){
            alert('Ushbu nomer mavjud')
        }else{
            phoneNum.push(elTelInput.value)
            elList.appendChild(li)
        }
        
        emptyInputs()
    })

}
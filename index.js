//  Select Elements

let allspans = document.querySelectorAll('.buttons span')
let results = document.querySelector('.results > span')
let input = document.getElementById('the-input')

allspans.forEach(span => {

    span.addEventListener('click' , e => {

        if(e.target.classList.contains('check-item')) {

            checkItem()
        }

        if(e.target.classList.contains('add-item')) {

            addItem()
        }

        if(e.target.classList.contains('delete-item')) {

            deleteItem()
        }

        if(e.target.classList.contains('show-item')) {

            showItem()
        }
    })
})

function ShowErrorMsg() {

        results.innerHTML = 'Input Can\'t Be Empty'
}

function checkItem() {

    if(input.value !== '') {

        if(localStorage.getItem(input.value)) {

            results.innerHTML = `Found Local Storage Item Called <span>${input.value}</span>`
        } else {

            results.innerHTML = `No Local Storage Item With The Name <span>${input.value}</span>`
        }
    } else {

        ShowErrorMsg()
    }
}

function addItem() {

    if(input.value !== '') {

        localStorage.setItem(input.value, 'Test')

        results.innerHTML = `Local Storage Item <span>${input.value}</span> Added`

        input.value = ''
        input.focus()
    } else {

        ShowErrorMsg()
    }
}

function deleteItem() {

    if(input.value !== '') {

        if(localStorage.getItem(input.value)) {

            localStorage.removeItem(input.value)

            results.innerHTML = `Local Storage Item Called <span>${input.value}</span> Deleted`
        } else {

            results.innerHTML = `No Local Storage Item With The Name <span>${input.value}</span>`
        }

        input.value = ''
    } else {

        ShowErrorMsg()
    }
}

function showItem() {

    results.innerHTML = ''

    if(localStorage.length) {

        for(let [key, value] of Object.entries(localStorage)) {

            results.innerHTML += `<span class='keys'>${key} => ${value}</span>`
        }
    } else {

        results.innerHTML = `Local Storage Is Empty`
    }
}
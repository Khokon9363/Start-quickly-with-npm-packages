// How many item added by Developer
let items = [
    'bootstrap', 'tailwindcss', 'vue', 'react', 'vuetify', '@material-ui/core'
]
function defaultItems() {
    item = ''
    for (let i = 0; i < items.length; i++) {
        item += '<label class="list-group-item remove">'
        item += '<input class="form-check-input me-1" onChange="myFunc(this)" type="checkbox" value=" '+ items[i] +'">'
        item += items[i]
        item += '</label>'
    }
    document.getElementById("addItems").innerHTML = item
}

// call the default function to show items
defaultItems()

// Add more item by user input
let copyText = document.getElementById("copyText")
function addMore() {
    let userItem = prompt('Write here a npm package name')
    items.push(userItem)
    defaultItems()
    copyText.value = ''
}


// Add items to copy
let result = ['npm i']
function myFunc(e) {
    if (e.checked == false)
        result.splice(result.indexOf(e.value), 1)
    else
        result.push(e.value)

    copyText.value = ''
    for (let i = 0; i < result.length; i++) {
        copyText.value += result[i]
    }
}

// Copy the text
function copy() {
    if(copyText.value.length == 0 || copyText.value == 'npm i'){
        alert("Select an item first")
        return
    }

    copyText.select()
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy")
    alert("Copied the text: " + copyText.value)
}
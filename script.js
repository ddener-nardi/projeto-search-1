const searchInput = document.querySelector('#search-input')

// functions
const searchPar = (search) =>{
    const items = document.querySelectorAll('.item')


    items.forEach((item) => {
        p = item.querySelector('h4').innerHTML.toLowerCase()

        lowerSearch = search.toLowerCase()

        item.style.display = 'block'

        if(!p.includes(lowerSearch)){
            item.style.display = 'none' 
        }

    })
}

// events

searchInput.addEventListener('keyup', (e) =>{
    search = e.target.value

    searchPar(search)
})
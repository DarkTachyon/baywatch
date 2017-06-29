const app = {
    init(selectors) {
        this.flicks = []
        this.max = 0
        this.list = document.querySelector(selectors.listSelector)

        document
            .querySelector(selectors.formSelector)
            .addEventListener('submit', this.handleSubmit.bind(this))
      },

    renderListItem(flick) {
        const listDiv = document.createElement('div')
        listDiv.setAttribute('class', 'grid-x')
        listDiv.style.backgroundColor = '#fafafa'

        const flickDiv = document.createElement('div')
        flickDiv.setAttribute('class', 'small-6 cell')

        const words = document.createElement('p')
        words.textContent = flick.name

        const buttonsDiv = document.createElement('div')
        buttonsDiv.setAttribute('class', 'small-6 cell')

        const placeDiv = document.createElement('div')
        placeDiv.setAttribute('class', 'medium-8 medium-offset-2 cell')

        const buttonGroupDiv = document.createElement('div')
        buttonGroupDiv.setAttribute('class', 'button-group')

        const favButton = document.createElement('button')
        favButton.setAttribute('class', 'hollow button warning')
        favButton.textContent = 'Favorite'
        favButton.addEventListener('favorite', this.handleFav.bind(this))

        const upButton = document.createElement('button')
        upButton.setAttribute('class', 'hollow button secondary')
        upButton.textContent = 'Up'
        upButton.addEventListener('up', this.handleUp.bind(this))

        const downButton = document.createElement('button')
        downButton.setAttribute('class', 'hollow button secondary')
        downButton.textContent = 'Down'
        downButton.addEventListener('down', this.handleDown.bind(this))

        const delButton = document.createElement('button')
        delButton.setAttribute('class', 'hollow button alert')
        delButton.textContent = 'Delete'
        delButton.addEventListener('delete', this.handleDelete.bind(this))

        listDiv.appendChild(flickDiv)
        listDiv.appendChild(buttonsDiv)

        flickDiv.appendChild(words)

        buttonsDiv.appendChild(placeDiv)

        placeDiv.appendChild(buttonGroupDiv)

        buttonGroupDiv.appendChild(favButton)
        buttonGroupDiv.appendChild(upButton)
        buttonGroupDiv.appendChild(downButton)
        buttonGroupDiv.appendChild(delButton)

        this.addFlick(flick)

        return listDiv
    },

    addFlick(flick) {
        this.flicks.push(flick)
    },

    handleSubmit(ev) {
        ev.preventDefault()
        const f = ev.target
        const flick = {
            id: this.max + 1,
            name: f.flickName.value,
        }

        const listItem = this.renderListItem(flick)
        this.list.appendChild(listItem)

        this.max++
    },

    handleFav(ev) {
        ev.preventDefault()
        const tar = ev.target
        if (ev.style.backgroundColor !== '#fff099')
            ev.style.backgroundColor = 'fafafa'
        else
            ev.style.backgroundColor = '#fff099'
    },

    handleUp(ev) {

    },

    handleDown(ev) {

    },

    handleDelete(ev) {

    },
}

app.init({
    formSelector: 'form#flick-form',
    listSelector: '#flick-list',
    })

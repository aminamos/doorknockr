class Events {
  constructor() {
    this.events = []
    this.adapter = new EventsAdapter()
    this.convenientStuffGoesHere()
    this.fetchAndLoadEvents()
  }

  convenientStuffGoesHere() {
    this.eventsContainer = document.querySelector('.events-container')
    this.formTitle = document.getElementById('form-title')
    this.formDate = document.getElementById('form-date')
    this.formDescription = document.getElementById('form-description')
    this.newEventForm = document.getElementById('new-event-form')
    this.newEventForm.addEventListener('submit', this.createEvent.bind(this))
  }

  createEvent(e) {
    e.preventDefault()
    let titleValue = this.formTitle.value
    let dateValue = this.formDate.value
    let descriptionValue = this.formDescription.value
    
    this.adapter.createNote(titleValue,dateValue,descriptionValue)
    .then(event => {
      this.events.push(new Event(event))
      this.render()
    })
    this.formTitle.value = ''
    this.formDate.value = ''
    this.formDescription.value = ''
  }
  
  fetchAndLoadEvents() {
    this.adapter
    .getEvents()
    .then(events => {
      events.forEach(event => this.events.push(new Event(event)))
    })
    .then(
      () => {
        this.render()
      }
    )
  }

  render() {
    this.eventsContainer.innerHTML = this.events.map(event => event.renderLi).join('')
    const dButtons = document.querySelectorAll('.delete')
    for (const button of dButtons) {
      button.addEventListener('click',function(e) {
        let eventID = e.target.id
        this.adapter.deleteEvent(eventID)
        this.events.pop()
        this.reRender()
      }.bind(this))
    }
  }

  reRender() {
    this.eventsContainer.innerHTML = this.events.map(event => event.renderLi).join('')
  }
}


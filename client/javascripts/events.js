class Events {
  constructor() {
    this.events = []
    this.a = 'lolol'
    this.adapter = new EventsAdapter()
    this.convenientStuffGoesHere()
    this.fetchAndLoadEvents()
  }

  populateDropdown() {
    let dropdownMenu = document.querySelector('.dropdown-menu')
    let a = document.createElement('a')
    a.className = 'dropdown-item'
    console.log(this.events)
  }

  convenientStuffGoesHere() {
    this.eventsContainer = document.querySelector('.events-container')
    this.formTitle = document.getElementById('form-title')
    this.formDate = document.getElementById('form-date')
    this.formDescription = document.getElementById('form-description')
    this.newEventForm = document.getElementById('new-event-form')
    this.newEventForm.addEventListener('submit', this.createEvent.bind(this))
    this.issueTitle = document.getElementById('issue-form-title')
    this.issueId = document.querySelector('.custom-select')
    this.newIssueForm = document.getElementById('new-issue-form')
    this.newIssueForm.addEventListener('submit', this.createIssue.bind(this))
  }

  createEvent(e) {
    e.preventDefault()
    let titleValue = this.formTitle.value
    let dateValue = this.formDate.value
    let descriptionValue = this.formDescription.value
    
    this.adapter.createEvent(titleValue,dateValue,descriptionValue)
    .then(event => {
      this.events.push(new Event(event))
      this.render()
    })
    this.formTitle.value = ''
    this.formDate.value = ''
    this.formDescription.value = ''
  }

  createIssue(e) {
    e.preventDefault()
    // let this.issueEvent = document.getElementById('')
    let issueTitle = this.issueTitle.value
    let issueEventId = this.issueId.value

    // console.log(issueTitle,issueEventId)
    // a.setAttribute('eventJSON',)
  }
  
  fetchAndLoadEvents() {
    this.adapter
    .getEvents()
    .then(events => {
      let dropdownMenu = document.querySelector('.custom-select')
      for (let i = 0; i < events.length; i++) {
        let a = document.createElement('option')
        a.value = events[i].title
        a.id = events[i].id
        a.innerText = events[i].title
        dropdownMenu.appendChild(a)
      }
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


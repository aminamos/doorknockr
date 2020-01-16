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
      this.popDropdownPostCreate(event)
      this.render()
    })
    this.formTitle.value = ''
    this.formDate.value = ''
    this.formDescription.value = ''
  }

  createIssue(e) {
    e.preventDefault()
    let issueTitle = this.issueTitle.value
    let issueId = this.issueId.value
    
    this.adapter.createIssue(issueTitle,issueId)
    .then(event => {
      e = this.events
      let lastEvent = e[e.length-1]
      let newIssueNode = document.createElement('li')
      newIssueNode.innerText = lastEvent.title
      newIssueNode.id = 'issue-item'
      // let relatedEvent = document.getElementById(lastEvent.title)
      console.log(relatedEvent)
      // relatedEvent.appendChild(newIssueNode)
    })
  }

  popDropdown(events) {
    let dropdownMenu = document.querySelector('.custom-select')
    for (let i = 0; i < events.length; i++) {
      let a = document.createElement('option')
      a.id = events[i].id
      a.innerText = events[i].title
      dropdownMenu.appendChild(a)
    }
  }

  popDropdownPostCreate(event) {
    let dropdownMenu = document.querySelector('.custom-select')
    let a = document.createElement('option')
    a.value = event.title
    a.id = event.id
    a.innerText = event.title
    dropdownMenu.appendChild(a)
  }
  
  fetchAndLoadEvents() {
    this.adapter
    .getEvents()
    .then(events => {
      this.popDropdown(events)
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
        e.target.parentNode.remove()
        let dropdownMenu = document.querySelector('.custom-select')
        let newestItem = dropdownMenu[dropdownMenu.children.length-1]
        newestItem.remove()
      }.bind(this))
    }
  }

  reRender() {
    this.eventsContainer.innerHTML = this.events.map(event => event.renderLi).join('')
  }
}


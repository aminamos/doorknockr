// class Event {
//   constructor(title, date, description) {
//     this.title = title
//     this.date = date
//     this.description = description
//     this.fetchEvents
//     this.render
//   }

//   get fetchEvents() {
//     fetch('http://localhost:3000/events')
//     .then(
//       function(response) {
//         return response.json()
//       }
//     ).then(function(json) {
//       populatePageWithEvents(json)
//     })
//   }
  
//   populatePageWithEvents() {
//     let eventContainer = document.querySelector('.all-events')
//     console.log('hi')
//   }

//   get render() {
//     let eventContainer = document.querySelector('.all-events')
//     eventContainer.innerHTML += 'hi'
//   }
// }

class Event {
  constructor(title, date, description) {
    this.title = title
    this.date = date
    this.description = description
    this.fetchEvents
    this.render
  }
}
class EventsAdapter {
  constructor() {
    this.baseURL = 'http://localhost:3000/events';
  }

  getEvents() {
    return fetch(this.baseURL).then(res => res.json());
  }

  createEvent(title, date, description) {
    let eventObj = {
      title: title,
      date: date,
      description: description
    };

    let configObj = {
      method: 'POST',
      body: JSON.stringify(eventObj),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    };
    return fetch(this.baseURL, configObj).then(res => res.json());
  }

  showEvent(eventId) {
    return fetch(`${this.baseURL}/${eventId}`).then(res => res.json());
  }

  createIssue(issueTitle, issueId) {
    let eventObj = {
      title: issueTitle,
      event_title: issueId
    };

    let configObj = {
      method: 'POST',
      body: JSON.stringify(eventObj),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    };
    return fetch('http://localhost:3000/issues', configObj).then(res => res.json());
  }

  deleteEvent(id) {
    let eventObj = {
      id: id
    };

    let configObj = {
      method: 'DELETE',
      body: JSON.stringify(eventObj),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    };
    fetch(this.baseURL + `/${id}`, configObj).then(res => res.json());
  }
}

class IssuesAdapter {
  constructor() {
    this.baseURL = 'http://localhost:3000/issues'
  }

  getIssues() {
    return fetch(
      this.baseURL
    ).then(
      res => res.json()
    )
  }
}
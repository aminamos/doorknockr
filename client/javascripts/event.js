class Event {
  constructor(json) {
    this.id = json.id
    this.title = json.title
    this.date = json.date
    this.description = json.description
    this.issues = json.issues
  }

  get renderLi() {
    return `
      <li class="${this.title}" id="${this.id}">${this.title}
        <input type="button" value="delete" class="delete" id=${this.id}>
        <ul>
        ${this.issueTitles}
        </ul>
      </li>
    `
  }

  get issueTitles() {
    let is = this.issues
    let issueTitleString = ''
    
    if (is == undefined) {
      return ''
    } else {
      for (let i = 0; i < is.length; i++) {
        issueTitleString += `<li id="issue-item">${is[i].title}</li>`
      }
      return issueTitleString
    }
  }
}
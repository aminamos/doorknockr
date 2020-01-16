class Issue {
  constructor(json) {
    this.id = json.id
    this.title = json.title
  }

  get issueRenderLi() {
    return `
      <li id="${this.id}" value="test">${this.title}
        <input type="button" value="delete" class="delete" id=${this.id}>
        <ul>
        ${this.issueTitles}
        </ul>
      </li>
    `
  }

  get issueRenderTitles() {
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
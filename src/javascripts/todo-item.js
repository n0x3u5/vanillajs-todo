class TodoItem {
  constructor (taskStr) {
    this.checkBox = this.createCheckBox()
    this.label = this.createLabel(taskStr)
    this.disposeBtn = this.createDisposeBtn()
    this.listItem = this.createListItem()

    this.itemStatus = 'incomplete'
  }

  createCheckBox () {
    let checkBox = document.createElement('input')

    checkBox.setAttribute('type', 'checkbox')
    checkBox.setAttribute('class', 'todo-status')
    checkBox.addEventListener('click', () => { this.toggleStatus() })

    return checkBox
  }

  createLabel (taskStr) {
    let label = document.createElement('label')

    label.setAttribute('for', 'todo-status')
    label.setAttribute('class', 'not-done')
    label.innerHTML = taskStr

    return label
  }

  createDisposeBtn () {
    let disposeBtn = document.createElement('button')

    disposeBtn.setAttribute('class', 'dispose-btn')
    disposeBtn.innerHTML = '&#10006;'
    disposeBtn.addEventListener('click', () => { this.dispose() })

    return disposeBtn
  }

  createListItem () {
    let listItem = document.createElement('li')

    listItem.appendChild(this.checkBox)
    listItem.appendChild(this.label)
    listItem.appendChild(this.disposeBtn)

    listItem.setAttribute('class', 'clearfix')

    return listItem
  }

  getListItem () {
    return this.listItem
  }

  updateTask (task) {
    this.label.innerHTML = task
  }

  setStatus (status) {
    this.label.setAttribute('class', status)
    this.itemStatus = status
    if (status === 'incomplete') {
      this.checkBox.checked = false
    } else {
      this.checkBox.checked = true
    }
  }

  toggleStatus () {
    let labelStatus = this.label.getAttribute('class')

    if (labelStatus === 'complete') {
      this.setStatus('incomplete')
    } else {
      this.setStatus('complete')
    }
  }

  dispose () {
    let children = [...this.listItem.children]
    children.forEach((element) => {
      element.remove()
    })
    this.listItem.remove()
  }
}

export default TodoItem

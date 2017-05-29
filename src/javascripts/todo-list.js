import TodoItem from './todo-item'

class TodoList {
  constructor (invisibles) {
    this.todoItems = []
    this.invisibles = invisibles
    this.toggleAll = document.querySelector('.toggle-all')
    this.todoList = document.querySelector('.todo-list')
    this.todoCounter = document.querySelector('.todo-count')
    this.clearCompletedBtn = document.querySelector('.clear-completed')

    this.statusAll = 'incomplete'
    this.activeFilter = 'all'
    this.incompleteCount = 0

    this.toggleInvisibles()

    this.toggleAll.addEventListener('click', () => {
      this.toggleStatusAll()
      this.updateIncompleteCount()
    })

    this.clearCompletedBtn.addEventListener('click', () => {
      this.clearCompleted()
    })
  }

  addItem (taskStr) {
    let todoItem = new TodoItem(taskStr)
    let listElem = todoItem.getListItem()

    this.todoItems.push(todoItem)
    this.todoList.appendChild(listElem)

    this.updateIncompleteCount()

    todoItem.checkBox.addEventListener('click', () => {
      this.statusAll = 'incomplete'
      this.toggleAll.checked = false
      this.updateIncompleteCount()
    })

    todoItem.disposeBtn.addEventListener('click', () => {
      this.todoItems.splice(this.todoItems.indexOf(todoItem), 1)
      this.updateIncompleteCount()
    })
  }

  updateIncompleteCount () {
    this.incompleteCount = 0

    this.todoItems.forEach(todoItem => {
      if (todoItem.itemStatus === 'incomplete') {
        this.incompleteCount++
      }
    })

    if (this.incompleteCount > 0) {
      if (this.incompleteCount === 1) {
        this.todoCounter.innerHTML = `${this.incompleteCount} item left.`
      } else {
        this.todoCounter.innerHTML = `${this.incompleteCount} items left.`
      }
    } else {
      this.todoCounter.innerHTML = ''
    }

    this.updateListView(this.activeFilter)
    this.toggleInvisibles()
  }

  setStatusAll (status) {
    this.todoItems.forEach(todoItem => {
      todoItem.setStatus(status)
    })
  }

  toggleInvisibles () {
    this.invisibles.forEach(invisible => {
      if (this.todoItems.length > 0) {
        invisible.classList.remove('invisible')
      } else {
        invisible.classList.add('invisible')
      }
    })
  }

  toggleStatusAll () {
    if (this.statusAll === 'complete') {
      this.statusAll = 'incomplete'
    } else {
      this.statusAll = 'complete'
    }

    this.setStatusAll(this.statusAll)
  }

  clearCompleted () {
    let spliceBin = []

    this.todoItems.forEach(todoItem => {
      if (todoItem.itemStatus === 'complete') {
        spliceBin.push(todoItem)
        todoItem.dispose()
      }
    })

    spliceBin.forEach(spliceItem => {
      this.todoItems.splice(this.todoItems.indexOf(spliceItem), 1)
    })

    this.toggleAll.checked = false
    this.updateIncompleteCount()
  }

  updateListView (selectedFilter) {
    let allItems = this.todoItems
    let filteredTasks = []

    this.activeFilter = selectedFilter

    if (selectedFilter === 'all') {
      filteredTasks = allItems
    } else {
      filteredTasks = allItems.filter(todoItem => todoItem.itemStatus === selectedFilter)
    }

    allItems.forEach(item => {
      let itemElem = item.getListItem()
      let classList = itemElem.classList

      if (filteredTasks.includes(item)) {
        classList.remove('hidden')
      } else {
        classList.add('hidden')
      }
    })
  }
}

export default TodoList

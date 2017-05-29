let localTodoList = {}
let filters = []
let selectedFilter = {}

function prepFilters (todoList) {
  localTodoList = todoList
  filters = [...document.querySelector('.filters').children]

  filters.forEach(filter => {
    let isSelected = filter.getAttribute('class') === 'selected'

    if (isSelected) {
      selectedFilter = filter
    }

    filter.addEventListener('click', () => { updateFilter(filter) })
  })
}

function updateFilter (filter) {
  let isSelected = filter.getAttribute('class') === 'selected'
  let filterStr = ''

  if (!isSelected) {
    selectedFilter.setAttribute('class', '')

    filter.setAttribute('class', 'selected')
    selectedFilter = filter

    if (selectedFilter.innerHTML === 'Active') {
      filterStr = 'incomplete'
    } else if (selectedFilter.innerHTML === 'Completed') {
      filterStr = 'complete'
    } else {
      filterStr = 'all'
    }

    localTodoList.updateListView(filterStr)
  }
}

export default prepFilters

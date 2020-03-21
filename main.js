// init
let list = document.querySelector('#my-todo')
const todos = ['Hit the gym', 'Read a book', 'Buy eggs', 'Organize office', 'Pay bills', 'buy fruit']
for (let todo of todos) {
  addItem(todo)
}

let doneList = document.querySelector('#done')


// input
function addItem(text) {
  let newItem = document.createElement('li')
  newItem.innerHTML = `
    <label for="todo">${text}</label>
    <i class="delete fa fa-trash"></i>
  `
  // 如果 input 還沒有輸入內容，不會產生新的 todo
  if (text !== '') list.appendChild(newItem)
}

// Create
const addBtn = document.querySelector('#addBtn')
const inputBox = document.querySelector('#newTodo')

// 按 add 鍵輸入
addBtn.addEventListener('click', function (event) {
  let inputValue = document.querySelector('#newTodo').value
  console.log(inputValue)
  addItem(inputValue)
  // 輸入完後清空 input
  inputBox.value = ''
})

// 當使用者在 input#newTodo 裡按下 Enter 鍵時，一樣可以新增 todo
newTodo.addEventListener('keypress', function (event) {
  if (event.keyCode === 13) {
    let inputValue = document.querySelector('#newTodo').value
    console.log(inputValue)
    addItem(inputValue)
    inputBox.value = ''
  }
})

// Delete and check
list.addEventListener('click', function (event) {
  let li = event.target.parentElement
  if (event.target.classList.contains('delete')) {
    li.remove()
  } else if (event.target.tagName === 'LABEL') {
    //當你完成一項 todo 時，完成的 todo 會被送進另一個清單
    event.target.classList = 'checked'
    doneList.appendChild(li)
  }
})

// Return done
// 點擊done清單中的一項，可以回復至 todo 清單
doneList.addEventListener('click', function (event) {
  let li = event.target.parentElement
  if (event.target.classList.contains('delete')) {
    li.remove()
  } else if (event.target.tagName === 'LABEL') {
    list.appendChild(li)
    event.target.classList = ''
  }
})

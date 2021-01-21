// Кладем нужные елементы в переменные
const form = document.querySelector('.form')
const inputForm = document.querySelector('.form__input')
const todo__list = document.querySelector('.todo-list')
const counter = document.querySelector('.counter')
const footer = document.querySelector('.footer')
const todo = document.querySelector('.todo')

const todos = []




const createNewTodo = () => {
  const todo = document.createElement('li')
  todo.innerHTML = `
    <div class="todo">
      <input class="todo-input" type="radio" name="todo">
      <label for="todo">${inputForm.value}</label>
      <button class="btn-todo"><div class="todo-img"></div></button>
    </div>`
  todo.classList.add('list-item')
  if(inputForm.value !== '') {
  todo__list.prepend(todo)
  todos.push(todo.id = Date.now())
  }
} 


form.addEventListener('submit', (e) => {
  e.preventDefault()
  createNewTodo()
  counterSpan()
  if(todos.length) {
    footer.style.display = 'block'
  }
  inputForm.value = ''
  const btn_todo = document.querySelector('.btn-todo')
  const todo_img = document.querySelector('.todo-img')
  console.log(todos)
  btn_todo.addEventListener('click',e => {
    e.target.closest('li').remove()
    todos.pop()
    counterSpan()
  })
})








const counterSpan = () => {
  counter.innerHTML = `${todos.length} item left`
}



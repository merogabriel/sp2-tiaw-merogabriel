function getUser() {
  let userJSON = localStorage.getItem('user')
  let user = JSON.parse(userJSON)

  nameSpan = document.getElementById('nameSpan').innerHTML = user.name
  emailSpan = document.getElementById('emailSpan').innerHTML = user.email
  createdAtSpan = document.getElementById('createdAtSpan').innerHTML =
    user.createdAt
  birthSpan = document.getElementById('birthSpan').innerHTML = user.birth
  solutionsSpan = document.getElementById('solutionsSpan').innerHTML =
    user.solutions
}

function updateName() {
  let userJSON = localStorage.getItem('user')
  let user = JSON.parse(userJSON)

  let newName = prompt('Altere seu nome:', user.name)
  user.name = newName

  localStorage.setItem('user', JSON.stringify(user))
  document.location.reload(true)
}

function updatePassword() {
  let userJSON = localStorage.getItem('user')
  let user = JSON.parse(userJSON)

  let newPassword = prompt('Altere sua senha:', user.password)
  user.password = newPassword

  localStorage.setItem('user', JSON.stringify(user))
  document.location.reload(true)
}

function updateEmail() {
  let userJSON = localStorage.getItem('user')
  let user = JSON.parse(userJSON)

  let newEmail = prompt('Altere seu email:', user.email)
  user.email = newEmail

  localStorage.setItem('user', JSON.stringify(user))
  document.location.reload(true)
}

getUser()

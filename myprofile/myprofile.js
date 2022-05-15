function getUser() {
  let usersJSON = localStorage.getItem('db_usuarios')
  let user = JSON.parse(usersJSON).usuarios[1]

  nameSpan = document.getElementById('nameSpan').innerHTML = user.name
  emailSpan = document.getElementById('emailSpan').innerHTML = user.email
  createdAtSpan = document.getElementById('createdAtSpan').innerHTML =
    user.createdAt
  birthSpan = document.getElementById('birthSpan').innerHTML = user.birth
  solutionsSpan = document.getElementById('solutionsSpan').innerHTML =
    user.solutions
}

function updateName() {
  let usersJSON = localStorage.getItem('db_usuarios')
  let users = JSON.parse(usersJSON)
  let user = users.usuarios[1]

  let newName = prompt('Altere seu nome:', user.name)
  user.name = newName
  users.usuarios[1].name = newName

  localStorage.setItem('db_usuarios', JSON.stringify(users))
  document.location.reload(true)
}

function updatePassword() {
  let usersJSON = localStorage.getItem('db_usuarios')
  let users = JSON.parse(usersJSON)
  let user = users.usuarios[1]

  let newPassword = prompt('Altere sua senha:', user.password)
  user.password = newPassword
  users.usuarios[1].password = newPassword

  localStorage.setItem('db_usuarios', JSON.stringify(users))
  document.location.reload(true)
}

function updateEmail() {
  let usersJSON = localStorage.getItem('db_usuarios')
  let users = JSON.parse(usersJSON)
  let user = users.usuarios[1]

  let newEmail = prompt('Altere seu email:', user.email)
  console.log(newEmail)
  user.email = newEmail
  users.usuarios[1].email = newEmail

  localStorage.setItem('db_usuarios', JSON.stringify(users))
  document.location.reload(true)
}

getUser()

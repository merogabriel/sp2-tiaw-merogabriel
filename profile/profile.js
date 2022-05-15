function getUser() {
  const usersJSON = localStorage.getItem('db_usuarios')
  let user = JSON.parse(usersJSON).usuarios[1]

  nameSpan = document.getElementById('nameSpan').innerHTML = user.name
  emailSpan = document.getElementById('emailSpan').innerHTML = user.email
  createdAtSpan = document.getElementById('createdAtSpan').innerHTML =
    user.createdAt
  solutionsSpan = document.getElementById('solutionsSpan').innerHTML =
    user.solutions

}

getUser()

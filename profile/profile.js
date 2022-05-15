function getUser() {
  const userJSON = localStorage.getItem('user')
  let user = JSON.parse(userJSON)

  nameSpan = document.getElementById('nameSpan').innerHTML = user.name
  emailSpan = document.getElementById('emailSpan').innerHTML = user.email
  createdAtSpan = document.getElementById('createdAtSpan').innerHTML =
    user.createdAt
  solutionsSpan = document.getElementById('solutionsSpan').innerHTML =
    user.solutions
}

getUser()

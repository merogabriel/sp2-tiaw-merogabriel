const user = {
  id: 1,
  name: 'Gabriel Méro',
  password: '123',
  email: 'gabriel@gabriel.com',
  createdAt: '11/10/2009',
  birth: '27/12/1997',
  solutions: 83,
}

function initUser() {
  localStorage.setItem('user', JSON.stringify(user))
}

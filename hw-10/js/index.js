'use strict';

const getAllBtn = document.querySelector('.js-get-all');

const getBtn = document.querySelector('.js-get');
const getUserByIdInput = document.querySelector('.get-user-by-id-input');

const addBtn = document.querySelector('.js-add');
const addUserNameInput = document.querySelector('.add-user-name-input');
const addUserAgeInput = document.querySelector('.add-user-age-input');

const deleteBtn = document.querySelector('.js-delete');
const deleteUserInput = document.querySelector('.delete-user-input');

const updateBtn = document.querySelector('.js-update');
const updateUserIdInput = document.querySelector('.update-user-id-input');
const updateUserNameInput = document.querySelector('.update-user-name-input');
const updateUserAgeInput = document.querySelector('.update-user-age-input');

const resultBlock = document.querySelector('.result-block');
const result = document.querySelector('.result');


getAllBtn.addEventListener('click', getAllUsers);
getBtn.addEventListener('click', getUser);
addBtn.addEventListener('click', addUser);
deleteBtn.addEventListener('click', deleteUser);
updateBtn.addEventListener('click', updateUser)


function getAllUsers(event) {
  event.preventDefault();
  resetResultBlock();
  fetch('https://test-users-api.herokuapp.com/users')
    .then(response => {
      if (response.ok) return response.json();
      throw new Error('Error fetching data');
    })
    .then(data => createUsersTable(data))
    .catch(error => (result.textContent = 'ERROR' + error));
}

function createUsersTable(usersInfo) {
  const table = document.createElement('table');
  const tableHead = document.createElement('tr');
  const tableHeadId = document.createElement('th');
  const tableHeadName = document.createElement('th');
  const tableHeadAge = document.createElement('th');
  tableHeadId.textContent = 'ID';
  tableHeadName.textContent = 'NAME';
  tableHeadAge.textContent = 'AGE';
  tableHeadId.classList.add('table-cell-border');
  tableHeadName.classList.add('table-cell-border');
  tableHeadAge.classList.add('table-cell-border');
  table.classList.add('table');
  tableHead.append(tableHeadId, tableHeadName, tableHeadAge);
  table.appendChild(tableHead);
  usersInfo.data.forEach(element => {
    const row = document.createElement('tr');
    const userId = document.createElement('td');
    const userName = document.createElement('td');
    const userAge = document.createElement('td');
    userId.textContent = element.id;
    userName.textContent = element.name;
    userAge.textContent = element.age;
    userId.classList.add('table-cell-border');
    userName.classList.add('table-cell-border');
    userAge.classList.add('table-cell-border');
    row.append(userId, userName, userAge);
    table.appendChild(row);
  });
  resultBlock.appendChild(table);
}

function getUser(event) {
  event.preventDefault();
  
  fetch(`https://test-users-api.herokuapp.com/users/${getUserByIdInput.value}`)
    .then(response => {
      if (response.ok) return response.json();
      throw new Error('Error fetching data');
    })
    .then(data => showUserInfo(data))
    .catch(error => (result.textContent = 'error' + error));
}

function showUserInfo(user) {
  resultBlock.innerHTML = `<p class="result">Result: </br> 
  ID: ${user.data.id} </br> 
  NAME: ${user.data.name} </br> 
  AGE: ${user.data.age}</p>`
}

function addUser(event) {
  event.preventDefault();
  const newUser = {
    name: addUserNameInput.value,
    age: addUserAgeInput.value,
  };
  fetch('https://test-users-api.herokuapp.com/users', {
    method: 'POST',
    body: JSON.stringify(newUser),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  })
    .then(response => {
      if (response.ok) return response.json();
      throw new Error('Error fetching data');
    })
    .then(() => (resultBlock.innerHTML ='<p class="result">Result:</br>OK, USERS ADD</p>'))
    .catch(error => (result.textContent = 'ERROR' + error));
}

function deleteUser(event) {
  event.preventDefault();
  fetch(`https://test-users-api.herokuapp.com/users${deleteUserInput.value}`, {
    method: 'DELETE',
  })
    .then(response => {
      if (response.ok) return response;
      throw new Error('Error fetching data');
    })
    .then(() => (resultBlock.innerHTML ='<p class="result">Result:</br>OK, USER DELETED</p>'))
    .catch(error => (result.textContent = 'ERROR' + error));
}

function updateUser(event) {
  event.preventDefault();
  const userToUpdate = {
    body: {
      name: updateUserNameInput.value,
      age: updateUserAgeInput.value
    },
  };
  
  fetch(`https://test-users-api.herokuapp.com/users/${updateUserIdInput.value}`, {
    method: "PUT",
    body: JSON.stringify(userToUpdate),
    headers: {
      "Content-type": "application/json; charset = UTF-8"
    }
  })
  .then(response => {
    if (response.ok) return response.json();
    throw new Error('Error fetching data');
  })
  .then(() => (resultBlock.innerHTML ='<p class="result">Result:</br>Дані оновлено!</p>'))
  .catch(error => (result.textContent = 'Ошибка' + error));
}

function resetResultBlock() {
  resultBlock.innerHTML = '';
  const result = document.createElement("p");
  result.classList.add("result");
  result.textContent = "Result:"
  resultBlock.appendChild(result)
}

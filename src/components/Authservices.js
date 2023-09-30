export const registerUser = (user) => {
  const users = getUsersFromLocalStorage();
  const newUser = { ...user, id: generateUserId(),todoitems:[] };
  users.push(newUser);
  saveUsersToLocalStorage(users);
  setAuthenticatedUser(newUser);
  return newUser;
};

export const loginUser = (email, password) => {
  const users = getUsersFromLocalStorage();
  const user = users.find((u) => u.email === email && u.password === password);
  if (user) {
    setAuthenticatedUser(user);
  }
  return user;
};

export const logoutUser = () => {
  removeAuthenticatedUser();
};

export const isAuthenticated = () => {
  const user = getAuthenticatedUser();
  return !!user; // Returns true if a user is authenticated, false otherwise
};

export const getAuthenticatedUser = () => {
  const userJSON = localStorage.getItem("authenticatedUser");
  return JSON.parse(userJSON);
};

export const setAuthenticatedUser = (user) => {
  const userJSON = JSON.stringify(user);
  localStorage.setItem("authenticatedUser", userJSON);
};

export const removeAuthenticatedUser = () => {
  localStorage.removeItem("authenticatedUser");
};

const getUsersFromLocalStorage = () => {
  const usersJSON = localStorage.getItem("users");
  return JSON.parse(usersJSON) || [];
};

const saveUsersToLocalStorage = (users) => {
  const usersJSON = JSON.stringify(users);
  localStorage.setItem("users", usersJSON);
};

const generateUserId = () => {
  return Math.floor(Math.random() * 1000000); 
};

export const getTodoItems = (userId) => {
  const users = getUsersFromLocalStorage();
  const user = users.find((u) => u.id === userId);
  return user ? user.todoitems || [] : [];
};

export const addTodoItem = (userId, todoItem) => {
  const users = getUsersFromLocalStorage();
  const user = users.find((u) => u.id === userId);
  if (user) {
    todoItem.id = generateTodoItemId();
    user.todoitems.push(todoItem);
    saveUsersToLocalStorage(users);
    return todoItem;
  }
  return null;
};
export const generateTodoItemId = () => {
  return Math.floor(Math.random() * 1000000); 
};

export const updateTodoItem = (userId, todoItemId, updatedTodoItem) => {
  const users = getUsersFromLocalStorage();
  const user = users.find((u) => u.id === userId);
  if (user) {
    const todoItemIndex = user.todoitems.findIndex(
      (item) => item.id === todoItemId
    );
    if (todoItemIndex !== -1) {
      user.todoitems[todoItemIndex] = { ...updatedTodoItem, id: todoItemId };
      saveUsersToLocalStorage(users);
      return updatedTodoItem;
    }
  }
  return null;
};

export const removeTodoItem = (userId, todoItemId) => {
  const users = getUsersFromLocalStorage();
  const user = users.find((u) => u.id === userId);
  if (user) {
    const todoItemIndex = user.todoitems.findIndex(
      (item) => item.id === todoItemId
    );
    if (todoItemIndex !== -1) {
      user.todoitems.splice(todoItemIndex, 1);
      saveUsersToLocalStorage(users);
      return true;
    }
  }
  return false;
};
export const updateTodoItemDoneStatus = (userId, todoItemId, markedDone) => {
  const users = getUsersFromLocalStorage();
  const user = users.find((u) => u.id === userId);

  if (user) {
    const todoItemIndex = user.todoitems.findIndex(
      (item) => item.id === todoItemId
    );
    if (todoItemIndex !== -1) {
      user.todoitems[todoItemIndex].done = markedDone;
      saveUsersToLocalStorage(users);
      return true;
    }
  }

  return false;
};

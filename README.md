# React To-Do List App with Authentication

This is a simple React to-do list application with user authentication. Users can register, log in, add, edit, and delete to-do items.
The user data and to-do items are stored in local storage for demonstration purposes.

## Features

- User registration: Users can register with their name, email, and password.
- User login: Registered users can log in with their email and password.
- To-Do List: Users can view, add, edit, and delete to-do items.
- Mark as Done: Users can mark to-do items as done using checkboxes.


## Authentication flow
- first check for any already logged in user if found redirect to its todolist.done using useEffect hook and 'authenticatedUser' state.
- 'authenticatedUser'=contains the already logged in user data else null
- if no one is already Logged in ,then render homepage,and try to register or login.
- after login or registration authenticatedUser is set non null hence redirected to user page.

  for simplicity, i haven't use the encryption or decryption on password but it can be used to enhance the security.
  

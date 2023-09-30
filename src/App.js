import { useEffect,useState } from "react";
import {  Routes,Route} from "react-router-dom";
import { Navigate } from "react-router-dom";
import './App.css';
import Login from './components/login';
import Registration from './components/registration';
import TodoList from './components/todo/todoitemlist';
import RegistrationError from "./components/error/registrationError";
import Home from './components/todo/home';
import Error from "./components/error/Error";
import LoginError from "./components/error/loginError";



function App() {
   const [authenticatedUser, setAuthenticatedUser] = useState(null);
   
   useEffect(() => {
     const userJSON = localStorage.getItem("authenticatedUser");
     if (userJSON) {
       setAuthenticatedUser(JSON.parse(userJSON));
     }
   }, []);
    const handleLogout = () => {
    setAuthenticatedUser(null);
   };
   const handleLogin=(user)=>{
    setAuthenticatedUser(user);
   }
  

   return (
     <div className="App">
       <Routes>
         <Route
           path="/To_Do_List_Assignment"
           element={
             authenticatedUser ? (
               <Navigate to="/To_Do_List_Assignment/user" />
             ) : (
               <Home />
             )
           }
         ></Route>
         <Route
           path="/To_Do_List_Assignment/signin"
           element={
             authenticatedUser ? (
               <Navigate to="/To_Do_List_Assignment/user" />
             ) : (
               <Login onLogin={handleLogin} />
             )
           }
         ></Route>
         <Route
           path="/To_Do_List_Assignment/register"
           element={
             authenticatedUser ? (
               <Navigate to="/To_Do_List_Assignment/user" />
             ) : (
               <Registration onRegister={handleLogin} />
             )
           }
         ></Route>
         <Route
           path="/To_Do_List_Assignment/user"
           element={
             authenticatedUser ? (
               <TodoList
                 authenticatedUser={authenticatedUser}
                 onLogout={handleLogout}
               />
             ) : (
               <Navigate to="/To_Do_List_Assignment/signin" />
             )
           }
         ></Route>
         <Route
           path="/To_Do_List_Assignment/registererror"
           element={<RegistrationError />}
         ></Route>
         <Route
           path="/To_Do_List_Assignment/loginerror"
           element={<LoginError />}
         ></Route>
         <Route path="*" element={<Error />}></Route>
       </Routes>
     </div>
   );
}

export default App;

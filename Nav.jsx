import React from 'react'
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";
import "../App.css"
import Home from "./Home.jsx"
import Users from './Users.jsx'
import Create from './Create.jsx'
import Account from './Account.jsx'
export default function NavBar()
{
return(
  <Router>
     <div>
    <nav>
    <ul>
    <li>PostGram</li>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/users">Users</Link></li>
      <li><Link to="/create">Create post</Link></li>
      <li><Link to="/account">Account</Link></li>
    </ul>
    </nav>
    </div>
    <Routes>
      <Route path="/" element = {<Home />}  />
      <Route path="/users" element = {<Users />}  />
      <Route path="/create" element = {<Create />}  />
      <Route path="/account" element = {<Account />}  />
    </Routes>
  </Router>
)
}
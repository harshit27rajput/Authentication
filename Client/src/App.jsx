import Login from "./Login"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Register from "./Register"
import Home from "./Home";
import '../src/App.css'
function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Register />}></Route>
        <Route exact path='/login' element={<Login />}></Route>
        <Route exact path='/register' element={<Register />}></Route>
        <Route exact path='/home' element={<Home/>}></Route>
      </Routes>
    </Router>

  )
}

export default App


import SignUp from "./pages/SignUp"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import PrivateRoute from "./components/PrivateRoute"
import Header from "./components/Header"
import TodoDetail from "./pages/TodoDetail"

export default function App() {


  return (

    <>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route element={<PrivateRoute/>}>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/tododetail/:id" element={<TodoDetail/>}></Route>
          </Route>

          
        </Routes>
      </BrowserRouter>

    </>
  )
}


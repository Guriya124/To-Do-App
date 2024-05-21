

import SignUp from "./pages/SignUp"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import PrivateRoute from "./components/PrivateRoute"
export default function App() {


  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route element={PrivateRoute}>
          <Route path="/home" element={<Home />}></Route>
          </Route>
          <Route path="/sign-in" element={<SignIn/>}></Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}


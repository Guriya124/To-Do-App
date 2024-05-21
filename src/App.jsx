

import SignUp from "./pages/SignUp"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
export default function App() {


  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/sign-in" element={<SignIn/>}></Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}


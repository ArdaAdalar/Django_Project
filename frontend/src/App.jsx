import react from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import CreateNote from "./pages/MyBlog"
import ProtectedRoute from "./components/ProtectedRoute"
import AuthorNotes from "./pages/AuthorNotes";
import NoteComments from "./pages/NoteComment";

function Logout() {
  localStorage.clear()
  return <Navigate to="/login" />
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Register />
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute> 
              <Home />
              
              
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route path="/myblog" element={<CreateNote />} />
        <Route path="/author/:username" element={<AuthorNotes />} />
        <Route path="/comment/:noteid" element={<NoteComments />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Todos from "./components/Todos/Todos";
import AddPost from "./pages/AddPost/AddPost";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Home from "./pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/add_post" element={<AddPost />} />
          </Routes>
        </div>
      </div>
      {/* <Todos /> */}
    </BrowserRouter>
  );
}

export default App;

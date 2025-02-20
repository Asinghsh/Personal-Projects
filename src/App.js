import About from "./components/About";
import BlogList from "./components/BlogList";
import CreateBlog from "./components/CreateBlog";
import Home from "./components/Home";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import BlogDetails from "./components/BlogDetails";
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";




function App() {
  return (
    <Router>
    <div> 
      <NavBar/>
      <Routes>
      <Route path="/" element={<BlogList />} />
      <Route path="/add-blog" element={<CreateBlog />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/blogs/:id" element={<BlogDetails />} />
      </Routes>
      
      <Home/>
    </div>
    </Router>
  );
}

export default App;

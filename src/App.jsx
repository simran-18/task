import { BrowserRouter, Route,Routes } from "react-router-dom";
import PostsTable from "./pages/PostsTable";
import PostDetails from "./pages/PostDetails";
import UserDeatils from "./pages/UserDetails";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<PostsTable/>}/>
      <Route path="/post/:id" element={<PostDetails/>}/>
      <Route path="/user/:id" element={<UserDeatils/>}/>
      <Route path="*" element={<PostsTable/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

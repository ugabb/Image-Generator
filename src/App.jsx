
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./App.css";
import Navbar from "./Components/Navbar";
import Create from "./pages/Create";
import Home from "./pages/Home";


function App() {

  return (
    <div className="App">
      <BrowserRouter>
         <Navbar />
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="create" element={<Create />} />
          {/* <Route path="generateimage" element={<Create />} /> */}
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

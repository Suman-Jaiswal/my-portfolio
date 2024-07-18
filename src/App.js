import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Works from "./pages/Works";

function App() {

    return (
        <div style={{
             background: 'url(bg.avif) no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                backgroundBlendMode: 'color-burn',
                backgroundAttachment: 'fixed'
        }} className="App" >
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/resume" element={<Resume />} /> */}
                <Route path="/projects" element={<Works />} />
                <Route path="/blogs" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    );
}

export default App;

import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Works from "./pages/Works";

function App() {

    const style = {
        app: {
            boxSizing: 'border-box',
        }
    }

    return (
        <div style={style.app} className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/works" element={<Works />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    );
}

export default App;

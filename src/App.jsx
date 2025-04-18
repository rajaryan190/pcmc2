import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import WhatsappFloatButton from "./components/WhatsappFloatButton";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Services from "./Services";
import Getstarted from "./Getstarted";
import Blog from "./Blog";
import BlogDetail from "./components/BlogDetail";




function App() {
    return (
        <Router>
            <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/services" element={<Services />} />
                <Route path="/Getstarted" element={<Getstarted />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogDetail />} />
                </Route>
            </Routes>
            {/* <WhatsappFloatButton /> */}
            {/* Add any other components that should be displayed on all pages here */}
            <div className="fixed bottom-4 right-4">
                <WhatsappFloatButton />
            </div>
        </Router>
    );
}

export default App;

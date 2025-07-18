import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Admin from "./pages/Admin";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Products />} />
          {/* <Route path="/nosotros" element={<About />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/admin" element={<Admin />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;

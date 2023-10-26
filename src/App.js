import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
  let component;
  switch (window.location.pathname) {
    case "/home":
      component = <Home></Home>;
      break;

    case "/about":
      component = <About></About>;
      break;

    case "/contact":
      component = <Contact></Contact>;
      break;
  }
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      {component}
      <Footer></Footer>
    </>
  );
}

export default App;

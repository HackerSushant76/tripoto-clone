import "./App.css";
import "./App.css";
import { AllRoutes } from "./Routes/Allroutes";
import { Navbar } from "./Components/Navbar";
import Footer from "./Components/Footer";
import { useEffect, useState } from "react";
import HamburgerMenu from "./Components/HamburgerMenu";

function App() {
  const [ham, setHam] = useState(false);
  const changeNav = () => {
    if (window.innerWidth < 500) {
      setHam(true);
    } else {
      setHam(false);
    }
  };
  useEffect(() => {
    changeNav();
  }, []);
  console.log("ham", ham);
  return (
    <div className="App">
      {ham ? <HamburgerMenu /> : <Navbar />}
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;

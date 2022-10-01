import './App.css';
import "./App.css";
import { AllRoutes } from "./Routes/Allroutes";
import { Navbar } from "./Components/Navbar";
import Footer from "./Components/Footer";


function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;

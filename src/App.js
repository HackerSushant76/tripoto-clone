import './App.css';
import "./App.css";
import { AllRoutes } from "./Routes/Allroutes";
import { Navbar } from "./Components/Navbar";
import Footer from "./Components/Footer";
import SingleCardPage from "./Components/SingleCardPage";


function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      
       <SingleCardPage/>
      <Footer />
    </div>
  );
}

export default App;

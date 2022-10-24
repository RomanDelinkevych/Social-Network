import './App.css';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
          <div>
              <Header/>
              <Main/>
              <Footer/>
          </div>
      </BrowserRouter>
  );
}

export default App;

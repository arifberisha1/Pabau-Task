import './App.css';
import LandingPage from "./components/LandingPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Footer from "./components/Footer";
import Context from "./utils/Context";
import {useState} from "react";
import Option from "./components/Option";


function App() {

  const [contextValue, setContextValue] = useState({text: "Choose Service", step: 1});

  return (
      <>
        <Context.Provider value={{text: contextValue.text, step: contextValue.step, update: setContextValue}}>
          <BrowserRouter>
            <Routes>
              <Route path={"/"} element={<LandingPage/>}/>
              <Route path={"/option"} element={<Option/>}/>
            </Routes>
          </BrowserRouter>
          <Footer/>
        </Context.Provider>
      </>
  );
}

export default App;

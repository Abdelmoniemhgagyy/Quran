import './App.css';
import MainPage from "./components/MainPage/MainPage"
import Player from "./components/Player/Player1"
import {BrowserRouter, Routes,Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <>
    <Routes>
      <Route/>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/quran" element={<Player/>}/>
    </Routes>
    </>
    </BrowserRouter>
  );
}

export default App;

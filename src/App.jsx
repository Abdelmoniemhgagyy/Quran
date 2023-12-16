import './App.css';
import MainPage from "./components/MainPage/MainPage"
import Player from "./components/Player/Player1"
import Download from "./components/Download"
import ScrollToTop from "./components/ScroolToTop/ScroolToTop"
import {BrowserRouter, Routes,Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <>
    <Routes>
      <Route/>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/quran" element={<Player/>}/>
      <Route path="/download" element={<Download/>}/>
    </Routes>
    < ScrollToTop />
    </>
    </BrowserRouter>
  );
}

export default App;

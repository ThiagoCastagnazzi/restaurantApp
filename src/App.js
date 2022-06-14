import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Login from './Pages/Login';
import Tables from './Pages/Tables';
import NaoEncontrada from './Pages/NaoEncontrada';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="AppBody container">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="mesas" element={<Tables />} />
            <Route path="*" element={<NaoEncontrada />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

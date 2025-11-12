import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import PracticeAreaPage from './pages/PracticeAreaPage';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/corporate" element={<PracticeAreaPage />} />
          <Route path="/criminal" element={<PracticeAreaPage />} />
          <Route path="/family" element={<PracticeAreaPage />} />
          <Route path="/real-estate" element={<PracticeAreaPage />} />
          <Route path="/intellectual-property" element={<PracticeAreaPage />} />
          <Route path="/employment" element={<PracticeAreaPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

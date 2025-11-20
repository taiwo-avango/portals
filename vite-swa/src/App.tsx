import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import FormsPage from './pages/FormsPage';
import DataPage from './pages/DataPage';
import LayoutsPage from './pages/LayoutsPage';
import NotificationsPage from './pages/NotificationsPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/forms" element={<FormsPage />} />
            <Route path="/data" element={<DataPage />} />
            <Route path="/layouts" element={<LayoutsPage />} />
            <Route path="/notifications" element={<NotificationsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

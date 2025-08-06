import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Discover from './pages/Discover';
import Spaces from './pages/Spaces';
import Account from './pages/Account';
import Upgrade from './pages/Upgrade';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/spaces" element={<Spaces />} />
          <Route path="/account" element={<Account />} />
          <Route path="/upgrade" element={<Upgrade />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

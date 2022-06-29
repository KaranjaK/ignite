import {BrowserRouter, Routes, Route,} from 'react-router-dom'
import Home from "./pages/home/Home";
import Inbox from "./pages/inbox/Inbox"
import Schedule from "./pages/schedule/Schedule"
import Communities from "./pages/communities/Communities"
import Analytics from "./pages/analytics/Analytics"
import Resources from "./pages/resources/Resources"
import Settings from "./pages/settings/Settings"
import Login from "./pages/login/Login"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/ignite' element={<Login />} />
          <Route path='home' element={<Home />} />
          <Route path='inbox' element={<Inbox />} />
          <Route path='schedule' element={<Schedule />} />
          <Route path='communities' element={<Communities />} />
          <Route path='analytics' element={<Analytics />} />
          <Route path='resources' element={<Resources />} />
          <Route path='settings' element={<Settings />} />
          <Route path='login' element={<Login />} />
        </Routes>
      </BrowserRouter>
      {/* <Home /> */}
    </div>
  );
}

export default App;

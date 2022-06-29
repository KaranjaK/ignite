import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Inbox from "./pages/inbox/Inbox";
import Schedule from "./pages/schedule/Schedule";
import Communities from "./pages/communities/Communities";
import Resources from "./pages/resources/Resources";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/ignite" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/communities" element={<Communities />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;

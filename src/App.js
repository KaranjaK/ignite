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
        <Route path="/ignite/home" element={<Home />} />
        <Route path="/ignite/inbox" element={<Inbox />} />
        <Route path="/ignite/schedule" element={<Schedule />} />
        <Route path="/ignite/communities" element={<Communities />} />
        <Route path="/ignite/resources" element={<Resources />} />
        <Route path="/ignite/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;

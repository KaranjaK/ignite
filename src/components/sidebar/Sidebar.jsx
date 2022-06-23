import "./sidebar.scss"
import logo from "..//..//assets/images/logo.png"
import HomeIcon from '@mui/icons-material/Home';
import ChatIcon from '@mui/icons-material/Chat';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PeopleIcon from '@mui/icons-material/People';
import InsightsIcon from '@mui/icons-material/Insights';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import SettingsIcon from '@mui/icons-material/Settings';
import Settings from "@mui/icons-material/Settings";

const Sidebar = () => {
  return (
    <div class='sidebar'>
      <div className="logo">
        <img src={logo} alt="This is the company logo" className="logoi"/>
      </div>
      <div className="center">
        <ul>
          <lh>
            Main Menu
          </lh>
          <li>
            <HomeIcon />
            <span>Home</span>
          </li>
          <li>
            <ChatIcon />
            <span>Inbox</span>
          </li>
          <lh>
            <span>Workspace</span>
          </lh>
          <li>
            <CalendarMonthIcon />
            <span>Schedule</span>
          </li>
          <li>
            <PeopleIcon />
            <span>Communities</span>
          </li>
          <li>
            <InsightsIcon />
            <span>Analytics</span>
          </li>
          <lh>
            <span>General</span>
          </lh>
          <li>
            <AccessAlarmIcon />
            <span>Resources</span>
          </li>
          <li>
            <Settings />
            <span>Settings</span>
          </li>
        </ul>
      </div>
      <div className="bottom">Login</div>
    </div>
  )
}

export default Sidebar
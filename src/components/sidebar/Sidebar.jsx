import "./sidebar.scss";
import logo from "..//..//assets/images/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import ChatIcon from "@mui/icons-material/Chat";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PeopleIcon from "@mui/icons-material/People";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import Settings from "@mui/icons-material/Settings";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div class="sidebar">
      <div className="logo">
        <img src={logo} alt="This is the company logo" className="logoi" />
        <span className="title">TutorDash</span>
      </div>
      <div className="middle">
        <ul>
          <li className="listt">Main Menu</li>
          <Link
            to="/home"
            style={{ textDecoration: "none", color: "whitesmoke" }}
          >
            <li>
              <HomeIcon />
              <span>Home</span>
            </li>
          </Link>
          <Link
            to="/inbox"
            style={{ textDecoration: "none", color: "whitesmoke" }}
          >
            <li>
              <ChatIcon />
              <span>Inbox</span>
            </li>
          </Link>
          <li className="listt">
            <span>Workspace</span>
          </li>
          <Link
            to="/schedule"
            style={{ textDecoration: "none", color: "whitesmoke" }}
          >
            <li>
              <CalendarMonthIcon />
              <span>Schedule</span>
            </li>
          </Link>
          <Link
            to="/communities"
            style={{ textDecoration: "none", color: "whitesmoke" }}
          >
            <li>
              <PeopleIcon />
              <span>Communities</span>
            </li>
          </Link>
          <li className="listt">
            <span>General</span>
          </li>
          <Link
            to="/resources"
            style={{ textDecoration: "none", color: "whitesmoke" }}
          >
            <li>
              <AccessAlarmIcon />
              <span>Resources</span>
            </li>
          </Link>
          <Link
            to="/settings"
            style={{ textDecoration: "none", color: "whitesmoke" }}
          >
            <li>
              <Settings />
              <span>Settings</span>
            </li>
          </Link>
        </ul>
      </div>
      <div className="bottom">
        <form action="/login">
          <button type="submit" className="btn btn-danger" onClick={"/login"}>
            Logout
          </button>
        </form>
      </div>
    </div>
  );
};

export default Sidebar;

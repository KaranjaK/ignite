import "./sidebar.scss"
import logo from "..//..//assets/images/logo.png"

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
          <li>Home</li>
          <li>Inbox</li>
          <lh>Workspace</lh>
          <li>Schedule</li>
          <li>Communities</li>
          <li>Analytics</li>
          <lh>General</lh>
          <li>Resources</li>
          <li>Settings</li>
        </ul>
      </div>
      <div className="bottom">Login</div>
    </div>
  )
}

export default Sidebar
import Sidebar from '../../components/sidebar/Sidebar'
import './settings.scss'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EditIcon from '@mui/icons-material/Edit';

const Settings = () => {
  return (
    <div className='container-fluid'>
      <div className="settings">
        <Sidebar />
        <div className="set">
          <div className="set1">
            <AccountCircleIcon className='icon'/>
          </div>
          <div className="set2">
            <h4>Email</h4>
            <p>admin@ignite.com</p>
            <h4>Contact</h4>
            <p>No available contact</p>
            <h4>Biography</h4>
            <p>admin@ignite.com has not added any bio</p>
            <h4>Links</h4>
            <p>admin@ignite.com has not added any links</p>
          </div>
          <div className="set3">
            <button className='btn btn-primary'>
              <EditIcon /> Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings
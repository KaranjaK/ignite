import Datatablescom from '../../components/datablescom/Datatablescom'
import Sidebar from '../../components/sidebar/Sidebar'
import './communities.scss'

const Communities = () => {
  return (
    <div className='container-fluid'>
      <div className="communities">
        <Sidebar />
        <Datatablescom />
      </div>
    </div>
  )
}

export default Communities
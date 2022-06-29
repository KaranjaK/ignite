import Sidebar from '../../components/sidebar/Sidebar'
import './resources.scss'

const Resources = () => {
  return (
    <div>
      <div className="resources">
        <Sidebar />
        <div className="rescenter">
          <h1>There are no Available Resources Currently</h1>
        </div>
      </div>
    </div>
  )
}

export default Resources
import Calendar from "..//..//components/calendar1/Calendar"
import Sidebar from '../../components/sidebar/Sidebar'
import './schedule.scss'

const Schedule = () => {
  return (
    <div className='container-fluid'>
      <div className="schedule">
        <Sidebar />
        <div className="cal">
          <Calendar />
        </div>
      </div>
    </div>
  )
}

export default Schedule
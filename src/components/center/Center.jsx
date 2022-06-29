import "./center.scss"
import Progress from '..//progressbar/Progress'
import Chart from '..//chart/Chart'
import Calendar from "../calendar1/Calendar"
import Chat from "../chat/Chat"

const Center = () => {
  return (
    <div className="container-fluid">
      <div className='center'>
        <div className="charts">
            <Progress />
            <Chart />
        </div>
        <div className="date">
          <Calendar />
          <Chat />
        </div>
    </div>
    </div>
  )
}

export default Center
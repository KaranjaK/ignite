import "./center.scss"
import Progress from '..//progressbar/Progress'
import Chart from '..//chart/Chart'
import Calendar from "../calendar1/Calendar"

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
        </div>
    </div>
    </div>
  )
}

export default Center
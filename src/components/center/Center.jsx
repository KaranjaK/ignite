import "./center.scss"
import Progress from '..//progressbar/Progress'
import Chart from '..//chart/Chart'

const Center = () => {
  return (
    <div className="container-fluid">
      <div className='center'>
        <div className="charts">
            <Progress />
            <Chart />
        </div>
    </div>
    </div>
  )
}

export default Center
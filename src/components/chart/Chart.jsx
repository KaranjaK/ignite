import './chart.scss'
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'


const Chart = () => {
  return (
    <div className='chart'>
        <div className="charttop">
            <DisplaySettingsIcon className='charticon'/>
            <span className="charttext">Lessons Demographic</span>
        </div>
        <CircularProgressbar value={67} text={"70%"} />
    </div>
  )
}

export default Chart
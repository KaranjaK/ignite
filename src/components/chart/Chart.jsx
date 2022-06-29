import './chart.scss'
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import 'react-circular-progressbar/dist/styles.css'
import { PieChart, Pie, ResponsiveContainer, Tooltip } from 'recharts';

const data01 = [
  { name: 'Male', value: 400 },
  { name: 'Female', value: 300 },
  { name: 'Others', value: 300 },
];
const data02 = [
  { name: '<15years Old', value: 100 },
  { name: '15-24years Old', value: 100 },
  { name: '25-39 years Old', value: 200 },
  { name: '40-50 years Old', value: 100 },
  { name: '>50 years Old', value: 80 },
];

const Chart = () => {
  return (
    <div className='chart'>
        <div className="charttop">
            <DisplaySettingsIcon className='charticon'/>
            <span className="charttext">Lessons Demographic</span>
        </div>
        <hr />
        <ResponsiveContainer width="100%" height="80%">
        <PieChart width={400} height={400}>
          <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
          <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
import "./progress.scss";
import SummarizeIcon from "@mui/icons-material/Summarize";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "January",
    female: 40,
    male: 20,
    amt: 60,
  },
  {
    name: "February",
    female: 30,
    male: 27,
    amt: 57,
  },
  {
    name: "March",
    female: 20,
    male: 98,
    amt: 118,
  },
  {
    name: "April",
    female: 90,
    male: 39,
    amt: 129,
  },
  {
    name: "May",
    female: 18,
    male: 48,
    amt: 66,
  },
  {
    name: "June",
    female: 23,
    male: 38,
    amt: 61,
  },
  {
    name: "July",
    female: 0,
    male: 0,
    amt: 0,
  },
];

const Progress = () => {
  return (
    <div className="progres">
      <div className="ptop">
        <div className="ptopl">
          <SummarizeIcon className="sumicon" />
          <span className="sumtitle">Lesson Delivery Summary</span>
        </div>
        <div className="ptopr"></div>
      </div>
      <hr />

      <div className="pcenter">
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="female" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#39FF14" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#39FF14" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="male" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#000080" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#000080" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="female"
            stroke="#39FF14"
            fillOpacity={1}
            fill="url(#female)"
          />
          <Area
            type="monotone"
            dataKey="male"
            stroke="#000080"
            fillOpacity={1}
            fill="url(#male)"
          />
        </AreaChart>
      </div>
    </div>
  );
};

export default Progress;

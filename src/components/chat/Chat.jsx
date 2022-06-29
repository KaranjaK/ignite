import "./chat.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import logo from "..//..//assets/images/logo.png";
import ChatIcon from '@mui/icons-material/Chat';

function createData(username, pic, likes, comments, shares) {
  return { username, pic, likes, comments, shares };
}

const rows = [
  createData("Jane", { logo }, 20, 40, 40),
  createData("John", { logo }, 20, 40, 40),
];
const Chat = () => {
  return (
    <div className="chat">
        <div className="top">
            <ChatIcon className="chaticon"/>
            <span className="chattext">Most Engaging Audience</span>
        </div>
        <hr />
      <div className="bottom">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Username</TableCell>
                <TableCell align="right">Profile Pic</TableCell>
                <TableCell align="right">Likes</TableCell>
                <TableCell align="right">Comments</TableCell>
                <TableCell align="right">Shares</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.username}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.username}
                  </TableCell>
                  <TableCell align="right">
                    <div className="img">
                      <img src={row.pic} alt="ProfilePic" />
                    </div>
                  </TableCell>
                  <TableCell align="right">{row.likes}</TableCell>
                  <TableCell align="right">{row.comments}</TableCell>
                  <TableCell align="right">{row.shares}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Chat;

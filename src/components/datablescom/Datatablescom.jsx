import "./datatablescom.scss";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "likes",
    headerName: "Likes",
    type: "number",
    width: 90,
  },
  {
    field: "dislikes",
    headerName: "DisLikes",
    type: "number",
    width: 90,
  },
  { field: "comments", headerName: "Profile Bio", width: 300 },
];

const rows = [
  {
    id: 1,
    lastName: "Snow",
    firstName: "Jon",
    age: 35,
    likes: 20,
    dislikes: 3,
    comments: "Chatting is the best form of feedback",
  },
  {
    id: 2,
    lastName: "Lannister",
    firstName: "Cersei",
    age: 42,
    likes: 19,
    dislikes: 5,
    comments: "Having a point of view, is a view point",
  },
  {
    id: 3,
    lastName: "Lannister",
    firstName: "Jaime",
    age: 45,
    likes: 13,
    dislikes: 1,
    comments: "Communication is 10% verbal and 90% non-verbal",
  },
  {
    id: 4,
    lastName: "Stark",
    firstName: "Arya",
    age: 16,
    likes: 2,
    dislikes: 10,
    comments: "You only live ones",
  },
  {
    id: 5,
    lastName: "Targaryen",
    firstName: "Daenerys",
    age: null,
    likes: 20,
    dislikes: 2,
    comments: "Counting you blessings is the best form of thanks",
  },
  {
    id: 6,
    lastName: "Melisandre",
    firstName: null,
    age: 150,
    likes: 20,
    dislikes: 3,
    comments: "An apple a day and I will grow broke",
  },
  {
    id: 7,
    lastName: "Clifford",
    firstName: "Ferrara",
    age: 44,
    likes: 20,
    dislikes: 3,
    comments: "Chatting is the best form of feedback",
  },
  {
    id: 8,
    lastName: "Frances",
    firstName: "Rossini",
    age: 36,
    likes: 20,
    dislikes: 3,
    comments: "Chatting is the best form of feedback",
  },
  {
    id: 9,
    lastName: "Roxie",
    firstName: "Harvey",
    age: 65,
    likes: 20,
    dislikes: 3,
    comments: "Chatting is the best form of feedback",
  },
];

const Datatablescom = () => {
  return (
    <div className="datatablescom">
      <h1 className="title">Communities</h1>
      <DataGrid
        className="grid"
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatablescom;

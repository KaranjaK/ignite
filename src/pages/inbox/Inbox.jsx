import Datatables from "../../components/datatables/Datatables";
import Sidebar from "../../components/sidebar/Sidebar";
import "./inbox.scss";

const Inbox = () => {
  return (
    <div className="container-fluid">
      <div className="inbox">
        <Sidebar />
        <Datatables />
      </div>
    </div>
  );
};

export default Inbox;

import "./home.scss";
import Sidebar from "..//..//components/sidebar/Sidebar";
import Center from "../../components/center/Center";

const Home = () => {
  return (
    <div className="container-fluid">
      <div class="home">
        <Sidebar />
        <Center />
      </div>
    </div>
  );
};

export default Home;

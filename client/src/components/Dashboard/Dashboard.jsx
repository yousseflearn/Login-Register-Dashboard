import Sidebar from "./Sidebar Section/Sidebar.jsx";
import Body from "./Body Section/Body.jsx";

const Dashboard = () => {
  return (
    <div className="dashboard flex">
      <div className="dashboardContainer flex">
        <Sidebar />
        <Body />
        This is Dashboard Page <a href="/">Log Out</a>
      </div>
    </div>
  );
};

export default Dashboard;

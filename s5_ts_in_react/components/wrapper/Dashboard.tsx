export type DashboardProps = {
  name: string;
};

const Dashboard = ({ name }: DashboardProps) => {
  return <div>{name}</div>;
};

export default Dashboard;
